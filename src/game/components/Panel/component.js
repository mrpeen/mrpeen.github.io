import React from 'react';

import SkintonePanel from '../SkintonePanel';
import MakeUpPanel from '../MakeUpPanel';
import ToysPanel from '../ToysPanel';
import ExtrasPanel from '../ExtrasPanel';
import BackgroundPanel from '../BackgroundPanel';
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