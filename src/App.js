import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input';
import ColorInput from './components/color-input';
import Button from './components/button';
import CardColor from './components/card-color';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Color Management App
          </p>
        </header>
        <div className="App-content"></div>
          <div>
            <Input></Input>
            <ColorInput></ColorInput>
            <Button text="Add"></Button>
          </div>  
          <div>
            <CardColor width="200px" height="200px"></CardColor>
          </div>
      </div>
    );
  }
}
export default App;
