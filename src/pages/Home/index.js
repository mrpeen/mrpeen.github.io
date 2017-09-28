import React from 'react';

import mrPeen from './mrpeen.svg';
import './style.css';

const Home = () => (
  <div className="Home">
    <div className="Game">
      <div className="Portrait">
        <img
          className="MrPeen"
          src={mrPeen}
          alt="Mr Peen" />
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