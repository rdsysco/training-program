import Dispatcher from 'flux';

class CountdownDispatcher extends Dispatcher {

    handleAction(action) {
        console.log('dispatching action:', action)
        this.dispatch({
            source: 'VEIW_ACTION',
            action
        })
    }
}

export default CountdownDispatcher;