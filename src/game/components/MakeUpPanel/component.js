import React from 'react';

import Circle from '../Circle';
// import './style.css';

const SkintonePanel = ({items, active, onClick}) => (
  <div className="SkintonePanel">
    {items.map(({fill, id}) => 
      <div
        key={id}
        className="Panel--Item"> 
          <Circle
            id={id}
            fill={fill}
            onClick={onClick} />
      </div>)}
  </div>
);

export default SkintonePanel;