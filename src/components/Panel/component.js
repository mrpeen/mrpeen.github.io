import React from 'react';

import './style.css';

const Panel = ({selected, items, active}) => (
  <div className="Panel">
    <div className="Panel--row">
      {items.map(({fill}) =>
        <div
          key={fill}
          className="Panel--col"> 
          <span
            style={{backgroundColor: fill}}
            className="Circle" />
        </div>)}
    </div>
  </div>
);

export default Panel;