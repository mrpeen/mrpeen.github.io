import React from 'react';

import './style.css';

const Panel = ({selected, items, active, onClickItem}) => (
  <div className="Panel">
    {items.map(({fill, id}) =>
      <div
        key={fill}
        className="Panel--Item"> 
        <span
          onClick={() => onClickItem(id, selected)}
          style={{backgroundColor: fill}}
          className="Circle" />
      </div>)}
  </div>
);

export default Panel;