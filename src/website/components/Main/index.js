import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../../pages/Home';
import About from '../../pages/About';
import './style.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
      <Route exact path={process.env.PUBLIC_URL + '/about'} component={About} />
    </Switch>
  </main>
)

export default Main;