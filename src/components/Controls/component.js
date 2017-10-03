import React from 'react';

import './style.css';

const Controls = ({selectables, onClickItem}) => (
  <div className="Controls">
    {selectables.map(selectable => 
      <span
        key={selectable.name}
        onClick={() => onClickItem(selectable.id)}
        className={`Control ${selectable.isSelected ? 'Control--active' : ''}`}>
        <img
          src={selectable.icon} />
      </span>
    )}
  </div>
);

export default Controls;