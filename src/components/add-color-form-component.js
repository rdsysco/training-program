import React, { Component } from 'react';
import Proptypes from 'prop-types';

class AddColorForm extends Component {
    constructor(props) {
        super(props);
        this.sumbit = this.sumbit.bind(this);
    }

    static propTypes = {
        onNewColor: Proptypes.func
    };

    static defaultProps = {
        onNewColor: f=>f
    };

    sumbit(e) {
        const { _title, _color} = this.refs;
        e.preventDefault();
        this.props.onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }
    render() {
        return (
            <form onSubmit={this.sumbit}>
                <input  ref="_title"
                        type="text"
                        placeholder="color title..." required/>
                <input  ref="_color"
                        type="color" required/>
                <button>ADD</button>
            </form>
        );
    }
}



export default AddColorForm;