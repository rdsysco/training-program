class Application {

    constructor() {

        this.extentions = {};

        this.modules = {};
    }

    get context() {

        return {
            ...this.extentions
        };
    }

    register(name, module) {

        this.modules[name] = module;
    }

    startModule(name) {

        return new Promise((resolve, reject) => {

            const module = this.modules[name];

            if (module) {

                reject(`Module '${name}' not found`);
            }
            else {

                module.start(this.context)
                    .then(() => {

                        resolve(`Start '${name}' module successfully`);
                    })
                    .catch(() => {

                        reject(`Can not start '${name}' module`);
                    });
            }
        });
    }

    startModules() {

        return new Promise((resolve, reject) => {

            const names = Object.keys(this.modules);

            const promises = names.map((name) => this.modules[name].start(this.context));

            Promise.all(promises)
                .then(() => {

                    resolve(`Start all modules successfully`);
                })
                .catch(() => {

                    reject(`Can not start all modules`);
                });
        });
    }

    start(name) {

        return name ? this.startModule(name) : this.startModules();
    }

    stopModule(name) {

        return new Promise((resolve, reject) => {

            const module = this.modules[name];

            if (module) {

                reject(`Module '${name}' not found`);
            }
            else {

                module.start(this.context)
                    .then(() => {

                        resolve(`Stop '${name}' module successfully`);
                    })
                    .catch(() => {

                        reject(`Can not stop '${name}' module`);
                    });
            }
        });
    }

    stopModules() {

        return new Promise((resolve, reject) => {

            const names = Object.keys(this.modules);

            const promises = names.map((name) => this.modules[name].stop(this.context));

            Promise.all(promises)
                .then(() => {

                    resolve(`Stop all modules successfully`);
                })
                .catch(() => {

                    reject(`Can not stop all modules`);
                });
        });
    }

    stop(name) {

        return name ? this.stopModule(name) : this.stopModules();
    }

    use(name, extention) {

        this.extentions[name] = extention;
    }
}

export default Application;
export {
    Application
};