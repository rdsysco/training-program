import React from 'react';

const Input = (props) => {
    const inputStyle = {
        margin: '40px',
        padding: '10px',
        height: '25px',
        width: '300px',
        border: '1px solid #aaa',
        fontSize: '15px'
      };
    
  
    const onBlur = e => props.handelChange(e.target.value);

    return (<input onBlur={onBlur} type="text" style={inputStyle} />)
    
}
export default Input;