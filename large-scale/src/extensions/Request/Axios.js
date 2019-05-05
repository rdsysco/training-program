import IRequest from './IRequest';
import axios from 'axios';

class RequestAxios extends IRequest {

    constructor(options) {

        super();

        this.instance = axios.create(options);
    }

    get(url, options) {

        this.instance.get(url, options);
    }

    post(url, data, options) {

        this.instance.post(url, data, options);
    }
}

export default RequestAxios;
export {
    RequestAxios
}