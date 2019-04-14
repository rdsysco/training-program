import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom'
import GithubLogo from '../assets/images/github-logo.png'

class Home extends Component {
    search({query}){

        if(!query) return;

        this.props.history.push(`/user/${query}`);
    }
    render(){
        return(
            <div className="home">
                <img src={GithubLogo}/>
                <br/>
                <input type="text"
                       placeholder="Search any GitHub user ..."
                       onKeyUp={(event) => event.key === 'Enter' && this.search({event, query: event.target.value})}/>
                <br/>
            </div>
        );
    }
}

export {
    Home
}