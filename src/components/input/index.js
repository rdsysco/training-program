import React from 'react';

const inputStyle = {
    margin: '40px',
    padding: '10px',
    height: '25px',
    width: '300px',
    border: '1px solid #aaa',
    fontSize: '15px'
  };

class Input extends React.Component {
    render() {
        return (
            <input type="text" style={inputStyle} />
        )
    }
}
export default Input;