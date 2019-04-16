import React from 'react';
import Count from '../count';

class Rate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {rateValue: props.rate || 0};
        this.onRateChange = this.onRateChange.bind(this);
    }

    onRateChange(value){
        
        this.setState({rateValue: ++value })
    }
    render() {
        const {rateValue} = this.state;
        const star = () => [...Array(5)].map((item, index)=><div key={index} className={rateValue > index ?'rate-star isOn':'rate-star'} onClick={()=>this.onRateChange(index)}></div>)
        return (
            <div>
                {star()}
                <Count rate={rateValue} />
            </div>  
            )
    }
}
export default Rate;