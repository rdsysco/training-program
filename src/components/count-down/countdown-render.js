import CountdownDispatcher from './countdown-dispatcher';
import countdownActions from './countdown-actions';
import CountdownStore from './countdown-store';
import Countdown from './countdown-view';
import React from 'react';
import ReactDOM from 'react-dom';

const addDispatcher = new CountdownDispatcher()
const actions = countdownActions(addDispatcher)
const store = new CountdownStore(10, addDispatcher)

const render = count => ReactDOM.render(
    <Countdown count={count} {...actions} />,
    document.getElementById('root')
)

store.on('TICK', (count) => {
    console.log(count);
    render(store.count);
})
store.on('RESET', () => render(store.count))
render(store.count)