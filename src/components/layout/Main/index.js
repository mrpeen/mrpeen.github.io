import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../../../pages/Home';
import './style.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  </main>
)

export default Main;