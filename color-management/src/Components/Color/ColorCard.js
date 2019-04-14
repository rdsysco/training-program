import React from 'react';
import ColorRate from "./ColorRate";

class ColorCard extends React.Component {

    render() {

        let color = this.props.value;
        let deleteHandler = this.props.deleteHandler;
        
        return (
            <div style={{marginBottom: "20px"}}>
                <span>Name: {color.name}</span>
                <div style=
                {
                    {
                        backgroundColor: color.value,
                        width: "50px",
                        height: "20px"
                    }
                }></div>
                <ColorRate rates={color.rates} id={color.id} rateHandler={this.props.rateHandler} />
                <button type="button" onClick={() => deleteHandler(color.id)} >X</button>
            </div>
        )
    }
}

export default ColorCard