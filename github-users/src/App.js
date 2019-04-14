import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
//import {Details} from './components/Details'
import {Home} from './components/Home'
import {User} from './components/User'
import './App.css';

const Notfound = () => <h1>Not found</h1>

class App extends Component {
  render() {
    console.log(1, this);
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/user" component={User}/>
          <Route component={Notfound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
