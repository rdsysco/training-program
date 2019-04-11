import React from 'react';
import PropTypes from 'prop-types'
import './Card.Add.css'

export class CardAdd extends React.Component {
    constructor() {
        super();
        this.color = React.createRef();
        this.text = React.createRef();
        this.state = {
            text: ''
        };
    }

    add() {

        const title = this.text.current.value;

        const color = this.color.current.value;

        if (!title) return

        this.props.onAdd && this.props.onAdd({
            title,
            color
        });
    }

    render() {
        return (
            <div className="card-add">
                <input type="text"
                       ref={this.text}/>
                <input type="color"
                       ref={this.color}/>
                <button onClick={() => this.add()}>
                    Add
                </button>
            </div>
        );
    }
}

CardAdd.propTypes = {
    value: PropTypes.object
}

CardAdd.defaultProps = {
    value: {}
}
