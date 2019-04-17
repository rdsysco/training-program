import React from 'react';

const Countdown = ({ count, tick, reset }) => {

    const oneSecond = () => 1000

    if (count) {
        setTimeout(() => tick(), oneSecond)
    }

    return (count) ?
        <h1>{count}</h1> :
        <div onClick={() => reset(10)}>
            <span>CELEBRATE!!!</span>
            <span>(click to start over)</span>
        </div>
}

export default Countdown; 