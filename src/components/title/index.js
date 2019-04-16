import React from 'react';
const inputStyle = {
    
    height: '25px',
    width: '150px',
    paddingTop: '10px',
    fontSize: '15px'
  };
export default class Title extends React.Component {
    render() {
        return (
            <div style={inputStyle}>{this.props.text}</div>
        )
    }
}