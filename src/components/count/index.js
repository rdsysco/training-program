import React from 'react';

class Count extends React.Component {
    render(){
        return (
            <div style={{paddingTop:'10px',fontFamily:'san-serif'}}>
                <span>{this.props.rate}</span>
                <span> of </span>
                <span> 5 </span>
                <span> Starts </span>
            </div>
        )
    }
}
export default Count;