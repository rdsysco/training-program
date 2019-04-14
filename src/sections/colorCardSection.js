import React,{ Component } from "react";
import ColorCard from "../components/colorCard"

export default class ColorCardSection extends Component{
    render(){
        const { data,handler } =  this.props;
        return(
            <div>
                {
                data.items.map(color => {
                    return(
                        <ColorCard color={color} data={data} handler={handler} />
                    )
                })
                }
            </div>
        );
    }
}