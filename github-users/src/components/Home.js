import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom'

class Home extends Component {
    render(){
        console.log(11, this);
        return(
            <div>
                <h1>
                    HOME
                </h1>
                <Link to="/home">Home</Link>
                <Link to="/user">User</Link>
                <NavLink to="/user" activeStyle={
                    {color: 'red'}
                }>User</NavLink>
            </div>
        );
    }
}

export {
    Home
}