import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { timingSafeEqual } from 'crypto';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifts: []
    }
  }
  add() {
    this.setState({
      gifts: [...this.state.gifts, '123'],
      person: ''
    });
  }
  render() {
    return (
      <div className="App">
        <button className="btn-add" onClick={() => this.add()}>add</button>
        <div className="gift-list">
          {
            this.state.gifts.map((item) => <h1>item</h1>)
          }
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
