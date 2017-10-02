import React from 'react';

import './style.css';

const Panel = ({selected, items, active, onClickItem}) => (
  <div className="Panel">
    <div className="Panel--row">
      {items.map(({fill, id}) =>
        <div
          key={fill}
          className="Panel--col"> 
          <span
            onClick={() => onClickItem(id, selected)}
            style={{backgroundColor: fill}}
            className="Circle" />
        </div>)}
    </div>
  </div>
);

export default Panel;