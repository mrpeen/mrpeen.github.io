import React from 'react';

import Circle from '../../Circle';
// import './style.css';

const ExtrasPanel = ({items, active, onClick}) => (
  <div className="ExtrasPanel">
    {items.map(({fill, id}) => 
      <div
        key={id}
        className="Panel--Item"> 
          <Circle
            id={id}
            fill={fill}
            onClick={onClick} />
      </div>)}

    <div className="Panel--Item">
      <Circle
        isReset={true}
        onClick={() => onClick(null)} />
    </div>
  </div>
);

export default ExtrasPanel;