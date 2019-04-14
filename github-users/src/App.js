import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import UserIcon from './assets/images/masood.jpg';
import {Details} from './components/Details';
import {Home} from './components/Home';
import {NotFound} from './components/NotFound';
import {User} from './components/User';

class App extends Component {
  render() {
    return (
      <Router>
        <header>
          <a className="user-logo" 
             href="https://github.com/abdolian">
            <img src={UserIcon}/>
          </a>
          <label className="title">
            Masood Abdolian
          </label>
          <Link to="/" 
                className="home-link">
            Go To Home
          </Link>
        </header>
        <Switch>
          <Route path="/"                           component={Home}     exact/>
          <Route path="/user/:username"             component={User}     exact/>
          <Route path="/user/:username/details/:id" component={Details}  exact/>
          <Route                                    component={NotFound}      />
        </Switch>
        <footer>
          ©2019, Masood, Inc. All Rights Reserved.
        </footer>
      </Router>
    );
  }
}

export default App;
