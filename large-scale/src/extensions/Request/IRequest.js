class IRequest {

    get(url, options){

        return Promise.reject('Not implemented exception');
    }

    post(url, data, options){

        return Promise.reject('Not implemented exception');
    }
}

export default IRequest;
export {
    IRequest
}