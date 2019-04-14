import React, { Component } from "react";
import InputColor from '../components/inputColor';
import ButtonColor from '../components/buttonColor';
import ColorPicker from '../components/colorPicker';
export default class FormColorSection extends Component{
    constructor(){
        super();
        this.state={key:0,inputvalue:"", colorvalue:""};
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        this.addColor = this.addColor.bind(this);
    }
    addColor(){
        const { data, handler } = this.props;
        data.items.push({key:this.state.key,"title":this.state.inputvalue,"color":this.state.colorvalue,rate:0});
        this.state.key++;
        handler(data);

    }
    handleChangeColor(e){
        this.setState({colorvalue:e.target.value});

    }
    handleChangeInput(e){
        this.setState({inputvalue:e.target.value});
    }
    render(){

        return(
            <form>
                <InputColor value={this.state.inputvalue}
                            onChange={this.handleChangeInput}
                             />
                <ColorPicker value={this.state.colorvalue}
                                onChange={this.handleChangeColor}/>
                <ButtonColor onClick={this.addColor} />
            </form> 
        );
    }
}
