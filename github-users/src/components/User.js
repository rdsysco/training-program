import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom'

class User extends Component {
    render(){
        console.log(111, this);
        return(
            <div>
                USER
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
    User
}