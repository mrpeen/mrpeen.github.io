import React from 'react';

import './style.css';

const Controls = ({selectables, onClickItem}) => (
  <div className="Controls">
    {selectables.map(({name, id, isSelected, icon}) => 
      <span
        key={name}
        onClick={() => onClickItem(id)}
        className={`Control ${isSelected ? 'Control--active' : ''}`}>
        <img
          alt={name}
          src={icon} />
      </span>
    )}
  </div>
);

export default Controls;