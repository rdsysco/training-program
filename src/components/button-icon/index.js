import React from 'react';

export default class ButtonIcon extends React.Component {
    render() {
        return (
            <button onclick={this.prop} > {this.props.icon} </button>
        )
    }

}