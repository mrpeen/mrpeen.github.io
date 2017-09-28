import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/layout/Header';
import Main from './components/layout/Main';

import './index.css';

ReactDOM.render(
  <Router>
    <div className="Website">
      <Header />
      <Main />
    </div>
  </Router>,
  document.getElementById('root')
);