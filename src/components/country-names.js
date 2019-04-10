import React from 'react';
import { render } from 'react-dom';
import DataComponent from './data-component';

const CountryNames = ({data, selected=""}) =>
    <select className="people-list" defaultValue={selected}>
        {data.map(({name}, i)=> 
            <option key={i} value={name}>{name}</option>    
        )}
    </select>

const CountryDropDown = 
    DataComponent(
        CountryNames, 
        "https://restcountries.eu/rest/v1/all"
    );

export default CountryDropDown;