import React, { Component } from 'react';
import Star from './star';

class StarsList extends Component{

    constructor(props) {
        super(props);
        this.state = {rateValue: props.rateValue || 0};
        this.onRateChange = this.onRateChange.bind(this);
    }

    onRateChange(value){
        this.setState({rateValue: ++value })
    }

    render() {
        const { rateValue } = this.state;
        return(
        <div >
            {[...Array(5)].map((value, i) => <Star key={i} isOn={ i<rateValue ? true : false } starValue={i} onRateClick={this.onRateChange}/>)}
            {rateValue} of 5
        </div> 
        )
    }

} 

export default StarsList;