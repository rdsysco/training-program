import React, { Component } from 'react'
import User from './user';

class UserApp extends Component {

    constructor(props){
        super(props);
        this.state = { data: null, loading: false };
        this.props = props;
    }

    componentWillMount() {
        const { user } = this.props.match.params;
        this.setState({loading: true});
        fetch(`https://api.github.com/users/${user}`)
            .then(response => response.json())
            .then(data => this.setState({data,  loading: false}))
    }

    render() {
        const { data, loading } = this.state;
        return (!loading) ? <User {...data}/> : 'Loading...';
    }
}

export default UserApp;