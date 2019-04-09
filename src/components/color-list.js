

import React from 'react';
import Color from './color';

const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f }) => 

    <div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map(color =>
                <Color  key={color.id}
                    {...color}
                    onRate={(rating) => onRate(color.id, rating)}
                    onRemove={() => onRemove(color.id)}/>
            )
        }
    </div>;

export default ColorList;