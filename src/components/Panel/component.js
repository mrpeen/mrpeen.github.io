import React from 'react';

import Circle from '../Circle';
import './style.css';

const Panel = ({selected, items, active, onClickItem, colorChoiceOnly, toTakeOff}) => (
  <div className="Panel">
    {items.map(({fill, id, icon, name}) =>
      <div
        key={fill}
        className="Panel--Item"> 
        {colorChoiceOnly ?
          <Circle
            id={id}
            fill={fill}
            selected={selected} 
            onClick={onClickItem} />
            :
            <span className="Wearable">
              <img src={icon} alt={name} />
            </span>}
      </div>)}

      {toTakeOff &&
        <div className="Panel--Item">
          <Circle
            isReset={true}
            selected={selected}
            onClick={onClickItem} />
        </div>}
  </div>
);

export default Panel;