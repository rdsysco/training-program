import React from 'react';
import Color from './color';



const ColorsList = ({colors=[], onRateChange, onRemoveColor}) => 
    <div className="color-list">
        {colors.map((color, i) =>
            <Color key={i} color={color} onRateChange={onRateChange} onRemoveColor={onRemoveColor}/>
        )}
    </div>;

export default ColorsList;