import React from 'react';
import Star from './star';

const StarsList = ({rateValue=0, onRateChange}) => 
<div >
    {[...Array(5)].map((value, i) => <Star key={i} isOn={ i<rateValue ? true : false } starValue={i} onRateClick={onRateChange}/>)}
    {rateValue} of 5
</div>;

export default StarsList;