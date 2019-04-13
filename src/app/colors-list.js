import React from 'react';
import Color from './color';

const ColorsList = ({colors=[], onRateChange}) => 
    <div className="color-list">
        {colors.map((color, i) =>
            <Color key={i} {...color} onRateChange={onRateChange}/>
        )}
    </div>;

export default ColorsList;