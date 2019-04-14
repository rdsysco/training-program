import React, { Component } from 'react';
import data from "./data";
import logo from './logo.svg';
import './App.css';
import FormColorSection from './sections/formColorSection';
import ColorCardSection from './sections/colorCardSection'
class App extends Component {
  constructor(){
    super();
    this.handler=this.handler.bind(this);
    this.state={
      data
    }
  }
  handler(data){
    this.setState(data);
  }
  render() {
    return (
      <div className="App">
        <FormColorSection data={data} handler={this.handler} />
        <ColorCardSection data={data} handler={this.handler}/>
      </div>
    );
  }
}

export default App;
