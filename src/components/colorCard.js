import React,{ Component } from "react";
import StartRatingColor from './starRatingColor';
import "./colorCard.css"

export default class ColorCard extends Component{
    constructor(){
        super();
        this.removeColor = this.removeColor.bind(this);
    }
    removeColor(){
        const { color, data, handler } = this.props;
        delete data.items[color.key]; 
        handler(data);
    }
    render(){
        const { color } = this.props;
        return(
            <div className="card">
                <div>
                    <button type="button" 
                            className="remove-btn"
                            onClick={this.removeColor}>&times;</button>
                    <h3>{color.title}</h3>
                </div>
                <div className="card-content" 
                        style={{backgroundColor: color.color}}>
                </div>
                <div className="card-footer">
                    <StartRatingColor rate={color.rate} />
                </div>
            </div>
        );
    }
}