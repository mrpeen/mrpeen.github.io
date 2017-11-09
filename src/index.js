import 'font-awesome-webpack';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import Header from './website/components/Header';
import Main from './website/components/Main';
import dressUpApp from './game/reducers';
import { addSelectables } from './game/actions';

import './index.css';

const store = createStore(dressUpApp);

/*const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);*/

store.dispatch(addSelectables());
//unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="Website">
        <Header />
        <Main />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);