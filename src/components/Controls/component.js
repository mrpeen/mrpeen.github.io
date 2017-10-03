import React from 'react';

import './style.css';

const Controls = ({selectables}) => (
  <div className="Controls">
    {Object.keys(selectables).map(selectable => 
      <span
        key={selectable}
        className={`Control ${selectables[selectable].isSelected ? 'Control--active' : ''}`}>
        {selectable}
      </span>
    )}
  </div>
);

export default Controls;