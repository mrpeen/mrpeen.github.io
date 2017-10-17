import React from 'react';

import Circle from '../../Circle';
// import './style.css';

const ToysPanel = ({items, active, onClick, onClickClear}) => (
  <div className="ToysPanel">
    {items.map(({id, clears, icon, name}) => 
      <div
        key={id}
        className="Panel--Item"> 
          <span
            className="ItemIcon"
            key={id}
            onClick={() => onClick(id, active, clears)}>
            <img src={icon} alt={name} />
          </span>
      </div>)}

    <div className="Panel--Item">
      <Circle
        isReset={true}
        onClick={onClickClear} />
    </div>
  </div>
);

export default ToysPanel;