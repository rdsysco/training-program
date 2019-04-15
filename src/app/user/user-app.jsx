import React, { Component } from 'react'
import User from './user';
import Loading from '../loading';
import BackToHome from '../navigation/back-to-home';

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
        return (
            <div>
            <BackToHome/>
            {(!loading) ? <User {...data}/> : <Loading/>}
            </div>
        );
    }
}

export default UserApp;