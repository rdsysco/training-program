import React, { Component } from 'react';
import { v4 } from 'uuid';
import AddColorForm from './add-color-form';
import ColorList from './color-list';
import MemberList from './member-list';
import Clock from './clock';
import { render, unmountComponentAtNode } from 'react-dom';
import HiddenMessages from './hidden-messages';
import { Display, WhenFalsy, WhenTruthy } from './display'; 
import '../styles/App.css';
import '../styles/star.css';

const target = document.getElementById('root');
class App extends Component {

    constructor(){
        super();
        this.state = {
            colors: []
        };
        this.addColor = this.addColor.bind(this);
        this.rateColor = this.rateColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
    }

    addColor(title, color) {
        const colors = [
            ...this.state.colors, 
            {
                id: v4(),
                title,
                color,
                rating:0
            }
        ];
        this.setState({colors});
    }

    rateColor(id, rating) {
        const colors = this.state.colors.map( color => 
            (color.id !== id) ?
                colors : 
                {
                    ...colors,
                    rating
                }
        );
        this.setState({colors});
    }

    removeColor(id) {
        const colors = this.state.colors.filter( color => 
            (color.id !== id)
        );
        this.setState({colors})
    }

    
    render() {
        // const { addColor, rateColor, removeColor } = this;
        // const { colors } = this.state;
        // const time = {
            //     hours:"",
            //     minutes:"",
            //     seconds:"",
            //     timeOfDay:""
            // };
        const age = 22;
        return (
        <div className="App">
            <header className="App-header">
            
            <Display ifTruthy={age >= 21}>
                <WhenTruthy>
                    <h1>You Can Enter</h1>
                </WhenTruthy>
                <WhenFalsy>
                    <h1>Bit it Kid</h1>
                </WhenFalsy>
            </Display>
            {/* <Clock {...time} onClose={ () => unmountComponentAtNode(target) }/> */}
            {/* {/* <MemberList count={5}/> */}
            {/* <HiddenMessages/> */}
            {/* <AddColorForm onNewColor={addColor}/>
            <ColorList colors={colors} onRemove={removeColor} onRate={rateColor}/>  */}
            </header>
        </div>
        );
    }
}

export default App;
