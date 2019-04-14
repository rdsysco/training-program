import React, {Component} from 'react';
import { Link, NavLink } from 'react-router-dom'

class Details extends Component {

    constructor(){

        super();

        this.state = {
            data: undefined
        }
    }

    componentWillMount(){

        this.setState({
            username: this.props.match.params.username,
            id: this.props.match.params.id
        });
    }

    componentDidMount(){

        fetch(`https://api.github.com/users/${this.state.username}/events`)
        .then(response => response.json())
        .then(data => {

            data = data || [];

            const item = data.find((item) => item.id === this.state.id) || {};

            this.setState({ data: item });
        });
    }

    render(){

        const NotFound = () => <h1>Not found user details</h1>;

        const Found = () => (
            <div>
                <img src={this.state.data.actor.avatar_url}/>
                <br/>
                <br/>
                <h3>
                    {this.state.data.actor.display_login} ({this.state.data.id})
                </h3>
                <div>
                    Created at <b>{this.state.data.created_at}</b>
                </div>
                <p>
                    {this.state.data.payload.description}
                </p>
                <br/>
                <pre>
                    {JSON.stringify(this.state.data, 0, 4)}
                </pre>
                <br/>
            </div>
        );

        return(
            <div className="details">
                {this.state.data ? <Found/> : <NotFound/>}
            </div>
        );
    }
}

export {
    Details
}