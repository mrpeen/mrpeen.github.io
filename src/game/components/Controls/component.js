import React from 'react';

import './style.css';

const Controls = ({selectables, onClickItem}) => (
  <div className="Controls">
    {selectables.map(({name, id, isSelected, component, icon}) => 
      <span
        key={name}
        onClick={() => onClickItem(id)}
        className={`Control ${isSelected ? 'Control--active' : ''}`}>
        {component ? component : <img src={icon} alt="Control" />}
      </span>
    )}
  </div>
);

export default Controls;