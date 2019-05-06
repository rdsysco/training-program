class Application {

    constructor() {

        this.extentions = {};

        this.modules = {};
    }

    get context(){

        return {
            ...this.extentions
        };
    }

    register(name, module) {

        this.modules[name] = module;
    }

    start() {

        const modules = Object.keys(this.modules);

        modules.map((module) => module.start(this.context));
    }

    stop() {

        const modules = Object.keys(this.modules);

        modules.map((module) => module.stop(this.context));
    }

    use(name, extention) {

        this.extentions[name] = extention;
    }
}

export default Application;
export {
    Application
};