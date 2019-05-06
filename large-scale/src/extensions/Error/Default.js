import IError from './IError';

class ErrorDefault extends IError {

    log(...args){

        console.log(...args);
    }
}

export default ErrorDefault;
export {
    ErrorDefault
}