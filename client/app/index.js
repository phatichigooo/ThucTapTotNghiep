import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import About from './components/About/About';
import Home from './components/Home/Home';


render((
  <Router>
    <App>
      <Switch>
        {/* <Route exact path="/" component={Home}/> */}
        {/* <Route component={NotFound}/> */}
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
