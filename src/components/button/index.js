import React, {Component} from 'react';

class Button extends Component {
    render() {
        return(
            <button onclick={this.props} > {this.props.text} </button>
        )
    }
}
export default Button;