import React from 'react';

import UserActions from '../UserActions';
import Portrait from '../Portrait';
import Selectables from '../Selectables';
import './style.css';

const Game = () => (
  <div className="Game">
    <UserActions />
    <Portrait />
    <Selectables />
  </div>
);

export default Game;