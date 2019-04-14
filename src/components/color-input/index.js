import React from 'react';

const ColorInputStyle = {
    width: '50px',
    height: '50px',
    padding: '0px',
    margin: '20px'
}

class ColorInput extends React.Component{
    render() {
        return (
            <input type="color" style={ColorInputStyle} />
        )
    }
}
export default ColorInput;