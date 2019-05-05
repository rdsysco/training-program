import IRequest from './IRequest';
import request from 'request';

class RequestDefault extends IRequest {

    get(url, options) {

        return new Promise((resolve, reject) => {

            request.get(
                url,
                options,
                (error, response, body) => {

                    if (error) return reject(error);

                    resolve(response);
                }
            );
        });
    }

    post(url, data, options) {

        return new Promise((resolve, reject) => {

            options = options || {};

            options.form = data;

            request.get(
                url,
                options,
                (error, response, body) => {

                    if (error) return reject(error);

                    resolve(response);
                }
            );
        });
    }
}

export default RequestDefault;
export {
    RequestDefault
}