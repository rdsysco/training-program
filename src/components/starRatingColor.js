import React, { Component} from "react";
import StarColor from "./starColor"

export default class StartRatingColor extends Component{
    constructor(){
        super()
    }
    render(){
        const { rate } = this.props;
        return(

          <div>
            <StarColor />
            <div>
                <span>{rate}</span>
                <span> of 5 stars</span>
            </div>
          </div>  
        )
    }
}