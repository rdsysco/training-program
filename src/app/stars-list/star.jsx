import React from 'react';

const Star = ({starValue, isOn, onRateClick}) => 
{
    const onClick = e => {
        onRateClick(starValue);
    }
    return <div className={isOn ? 'star on':'star'} onClick={onClick}></div>;
}
export default Star;