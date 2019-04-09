import React, { Component } from 'react';
import { render } from 'react-dom';
import fetch from 'isomorphic-fetch';

class CountryList extends Component{

    constructor(){
        super();
        this.state = {
            loading: false,
            countryNames: []
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch('https://restcountries.eu/rest/v1/all')
            .then(response => response.json())
            .then(json => json.map(country => country.name))
            .then(countryNames =>
                this.setState({countryNames, loading: false})
            )
    }

    render(){
        const {loading, countryNames} = this.state;
        return (loading) ?
            <div>Loading Country Names...</div> :
            (!countryNames.length) ? 
                <div>No Country Names</div> :
                <ul>
                    {countryNames.map((countryName,i) =>
                        <li key={i}>{countryName}</li>    
                    )}
                </ul>
    }
};

export default CountryList;
