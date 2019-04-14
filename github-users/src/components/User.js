import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom'

class User extends Component {

    constructor(){

        super();

        this.state = {
            items: []
        }
    }

    componentWillMount(){

        this.setState({
            username: this.props.match.params.username
        });
    }

    componentDidMount(){

        fetch(`https://api.github.com/users/${this.state.username}/events`)
        .then(response => response.json())
        .then(data => this.setState({ items: data }));
    }

    render(){
        return(
            <div className="user">
                <h2 className="title">
                    {this.state.items && this.state.items.lenght ? `Events for '${this.state.username}' GitHub user` : `GitHub user '${this.state.username}' not found`}
                </h2>
                <ul>
                    {
                        this.state.items.map((item, index) => (
                            <li key={index}>
                                <span>
                                    {index + 1} )
                                </span>
                                <span >
                                    {item.type}
                                </span>
                                <span>
                                    {item.created_at}
                                </span>
                                <span>
                                    <Link to={`/user/${this.state.username}/details/${item.id}`}>
                                        Read More
                                    </Link>
                                </span>
                            </li>
                        ))
                    }
                </ul>
                <br/>
            </div>
        );
    }
}

export {
    User
}