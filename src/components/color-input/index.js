import React from 'react';
const ColorInput = props => {
    const ColorInputStyle = {
        width: '50px',
        height: '50px',
        padding: '0px',
        margin: '20px'
    }

    const onChange = e => {props.handelChange(e.target.value)};
    
    return (<input type="color" onChange={onChange} style={ColorInputStyle} />)
        
}
export default ColorInput;