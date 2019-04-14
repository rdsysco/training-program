import React, {Component} from 'react';
import Remove from "./remove-card";
import Star from "./star";
import data from "../data.json";

export default class Card extends Component {
    render() {

        return(
                <div style={{width: "20%" , float: "left",margin: "2% 10%"}}>
                  <div>
                  <h1>{this.props.title}</h1>
                  <Remove data = {this.props}/>
                  </div>
                  <div style={{background:this.props.color,minHeight:"100px"}}></div>
                  <div>
                    <p>{this.props.star} of 5</p>
                    <Star data = {this.props}/> 
                  </div>
                </div>
            )

    }
}