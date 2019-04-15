import React, { Component } from 'react';
import AddColorForm from './add-color-form';
import ColorsList from './colors-list';
import { v4 } from 'uuid';

import '../../styles/color-app.scss';
import BackToHome from '../navigation/back-to-home';

class ColorApp extends Component {

    constructor(){
        super();
        this.handleAddColor = this.handleAddColor.bind(this);
        this.onRemoveColor = this.onRemoveColor.bind(this);

        this.state = {
            colors:[
                {
                    id: v4(),
                    text: 'Brown', 
                    colorValue: '#562400',
                    rate: 3
                }
            ]
        };
    }
    
    handleAddColor(text, value) {
        const color = {
            text,
            colorValue: value,
            id: v4(),
            rate: 0
        };
        this.setState({colors:[...this.state.colors,color]});
    }

    onRemoveColor(colorId){
        const colors =  this.state.colors.filter(color => color.id !== colorId);
        this.setState({colors});
    }

    onRateChange(value) {
        console.log(value);
    }
    
    render() {
        const {colors} = this.state; 
        return(
            <div className="container">
                <BackToHome/>
                <div className="color-app">
                    <h1>Color List App</h1>
                    <AddColorForm onAddColor={this.handleAddColor}/>
                    <ColorsList  colors={colors} onRateChange={this.onRateChange} onRemoveColor={this.onRemoveColor}/>
                </div>
            </div>
        )
    }
}

export default ColorApp;