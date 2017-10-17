import React from 'react';

import {
  SkintonePanel,
  MakeUpPanel,
  ToysPanel,
  ExtrasPanel,
  BackgroundPanel
} from '../panels';
import './style.css';

const Panel = ({selected}) => (
  <div className="Panel">
    {selected === 'skintone' && <SkintonePanel />}

    {selected === 'makeUp' && <MakeUpPanel />}

    {selected === 'toys' && <ToysPanel />}

    {selected === 'extras' && <ExtrasPanel />}

    {selected === 'background' && <BackgroundPanel />}
  </div>
);

export default Panel;