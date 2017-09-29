import React from 'react';
import Isvg from 'react-inlinesvg';

import mrPeen from './mrpeen.svg';
import './style.css';

const Home = () => (
  <div className="Home">
    <div className="Game">
      <div className="Portrait">
        <Isvg src={mrPeen} />
      </div>
      <div className="Selectables">
        <div className="Nav">
        </div>
        <div className="Panel">
        </div>
      </div>
    </div>
  </div>
);

export default Home;