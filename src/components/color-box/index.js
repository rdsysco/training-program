import React, {Component} from 'react';

class ColorBox extends Component {
    render() {
        return (
            <div style={{backgroundColor:this.props.color, height: '100%'}}>&nbsp;</div>
        )
    }
}
export default ColorBox;