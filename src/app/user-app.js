import React, { Component } from 'react'
import User from './user';

class UserApp extends Component {

    constructor(){
        super();
        this.state = { data: null, loading: false };
    }

    componentWillMount() {
        const user = 'amirtvkli';
        this.setState({loading: true});
        fetch(`https://api.github.com/users/${user}`)
            .then(response => response.json())
            .then(data => this.setState({data,  loading: false}))

            console.log(this.state.loading);
    }

    render() {
        const { data, loading } = this.state;
        return (!loading) ? <User {...data}/> : 'Loading...';
    }
}

export default UserApp;