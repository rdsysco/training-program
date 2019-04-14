import React, {Component} from 'react';

export default class Input extends Component {
  render() {
        return(
                <input
                  type={this.props.type}
                  ref={this.props.ref}
                  placeholder={this.props.placeholder}
                  style={this.props.style}
                />
            )

    }
}