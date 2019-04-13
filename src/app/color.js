import React from 'react';
import StarsList from './stars-list';

const Color = ({text, colorValue, rate, onRateChange}) => {
    return(
        <div className="color-box">
            <h2 className="color-text">{text}</h2>
            <p className="color-value" style={ {backgroundColor: colorValue}}>{colorValue}</p>
            <StarsList rateValue={rate} onRateChange={onRateChange}/>
        </div>
    );
}
 

export default Color;