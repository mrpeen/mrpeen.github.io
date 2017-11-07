import React from 'react';

import './style.css';

const Controls = ({selectables, onClickItem}) => (
  <div className="Controls">
    {selectables.map(({name, id, isSelected, component}) => 
      <span
        key={name}
        onClick={() => onClickItem(id)}
        className={`Control ${isSelected ? 'Control--active' : ''}`}>
        {component}
      </span>
    )}
  </div>
);

export default Controls;