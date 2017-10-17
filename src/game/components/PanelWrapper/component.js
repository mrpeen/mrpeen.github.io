import React from 'react';

import {
  SkintonePanel,
  MakeUpPanel,
  ToysPanel,
  ExtrasPanel,
  BackgroundPanel
} from '../panels';
import './style.css';

const pickPanel = (selected) => {
  switch(selected) {
    case 'skintone':
      return <SkintonePanel />
    case 'makeUp':
      return <MakeUpPanel />
    case 'toys':
      return <ToysPanel />
    case 'extras':
      return <ExtrasPanel />
    default:
      return <BackgroundPanel />
  }
}

const Panel = ({selected}) => (
  <div className="PanelWrapper">
    {pickPanel(selected)}
  </div>
);

export default Panel;