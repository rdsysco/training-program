import React, { Component } from 'react';
import data from "./data.json";
import Card from "./component/card";
import Add from "./component/add"
import logo from './logo.svg';
import './App.css';
import { SocialIcon } from 'react-social-icons';

class App extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);

    this.state = {
      data
    };
  }

  handler(data) {
    this.setState({
      data
    })
  }

  render() {
    return (
      <div className="App">
        
      <Add handler = {this.handler}/>

        {
          Object.keys(data.cards).map((key) =>
            <Card title = {data.cards[key].title} color = {data.cards[key].color} star = {data.cards[key].star} handler = {this.handler}/>
          )
        }

      </div>
    );
  }
}

export default App;
