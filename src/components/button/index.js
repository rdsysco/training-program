import React, {Component} from 'react';

const Button = props => {
    const inputStyle = {
        marginTop: '40px',
        height: '25px',
        border: '1px solid #aaa',
        fontSize: '15px'
      };
    return <button  onClick={props.onClick} style={inputStyle}> {props.text} </button>
}
export default Button;