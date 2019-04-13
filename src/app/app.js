import React, { Component } from 'react';
import AddColorForm from './add-color-form';
import ColorsList from './colors-list';
import '../styles/color-app.css';

class ColorApp extends Component {

    constructor(){
        super();
        this.handleAddColor = this.handleAddColor.bind(this);
        this.state = {
            colors:[
                {
                    text: 'blue', 
                    colorValue: '#00ff00',
                    rate: 3
                }
            ]
        };
    }
    
    handleAddColor(text, value) {
        const color = {text,colorValue: value};
        this.setState({colors:[...this.state.colors,color]});
        console.log(this.state.colors);
    }

    onRateChange(value) {
        console.log(value);
    }
    
    render() {
        const {colors} = this.state; 
        return(
            <div className="container">
                <div className="color-app">
                    <AddColorForm onAddColor={this.handleAddColor}/>
                    <ColorsList  colors={colors} onRateChange={this.onRateChange}/>
                </div>
            </div>
        )
    }
}

export default ColorApp;