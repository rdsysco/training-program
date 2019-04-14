import React from 'react';
import StarsList from './stars-list';

const Color = ({ color, onRateChange, onRemoveColor}) => {

    const {id: colorId, text, colorValue, rate} = color;

    return(
        <div className="color-box">
        <button className="box-close" onClick={() => onRemoveColor(colorId)}>*</button>
            <h2 className="color-text">{text || 'untitle'}</h2>
            <p className="color-value" style={ {backgroundColor: colorValue}}>{colorValue}</p>
            <StarsList rateValue={rate} onRateChange={onRateChange}/>
        </div>
    );
}
 

export default Color;