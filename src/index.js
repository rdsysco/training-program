import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserApp from './app/user-app';
import Menu from './app/menu';
import Home from './app/home';
import ColorApp from './app/color-app';
import { Route, BrowserRouter as Router , Switch} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import Notfound from './app/notfound';

const routing = (
    <Router>
        <Menu/>
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/colorapp" component={ ColorApp }/>
            <Route path="/userapp" component={ UserApp }/>
            <Route component={ Notfound }/>
        </Switch>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
