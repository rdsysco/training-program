import React, { Component } from 'react';
import { render } from 'react-dom';
import fetch from 'isomorphic-fetch';

class PeopleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: [],
            loading: false,
            loaded: false
        }
    }

    componentWillMount() {
        this.setState({loading: true});
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(obj => obj.results)
            .then(people => this.setState({
                loaded: true,
                loading: false,
                people
            }))
    }

    render() {
        const { people, loading, loaded } = this.state;
        return (loading) ?
            <div>Loading...</div> :
            <ol>
                {people.map((person, i) => {
                    const {first, last} = person.name;
                    return <li key={i}>{first} {last}</li>
                })}
            </ol>
    }

};

export default PeopleList;