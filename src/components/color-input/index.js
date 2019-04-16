import React from 'react';
const ColorInput = props => {
    const ColorInputStyle = {
        width: '25px',
        height: '25px',
        padding: '0px',
        margin: '5px',
        backgroundColor: '#fff',
        border:'none'
    }

    const onChange = e => {props.handelChange(e.target.value)};
    
    return (<input type="color" onChange={onChange} style={ColorInputStyle} />)
        
}
export default ColorInput;