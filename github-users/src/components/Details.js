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

            const item = data.find((item) => item.id === this.state.id);

            this.setState({ data: item });
        });
    }

    render(){

        const Empty = () => <h1>Not found user details</h1>;

        const Found = () => <div>ddddd</div>;

        return(
            <div className="user">
                {this.state.data ? <Found/> : <Empty/>}
            </div>
        );
    }
}

export {
    Details
}