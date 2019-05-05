import INotification from './INotification';

class NotificationDefault extends INotification {

    alert(message){

        alert(message);
    }
}

export default NotificationDefault;
export {
    NotificationDefault
}