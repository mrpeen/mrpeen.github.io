import React from 'react';

import Circle from '../../Circle';
// import './style.css';

const BackgroundPanel = ({items, active, onClick}) => (
  <div className="BackgroundPanel">
    {items.map(({fill, id, icon}) => 
      <div
        key={id}
        className="Panel--Item"> 
          <Circle
            id={id}
            fill={fill}
            background={icon}
            onClick={onClick} />
      </div>)}

    <div className="Panel--Item">
      <Circle
        isReset={true}
        onClick={() => onClick(null)} />
    </div>
  </div>
);

export default BackgroundPanel;