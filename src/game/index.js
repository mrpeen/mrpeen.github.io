import React from 'react';

import UserActions from './components/UserActions';
import Portrait from './components/Portrait';
import Selectables from './components/Selectables';
import './style.css';

const Game = () => (
  <div className="Game">
    <UserActions />
    <Portrait />
    <Selectables />
  </div>
);

export default Game;