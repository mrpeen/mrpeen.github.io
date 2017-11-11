import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../../pages/Home';
import About from '../../pages/About';
import './style.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </main>
)

export default Main;