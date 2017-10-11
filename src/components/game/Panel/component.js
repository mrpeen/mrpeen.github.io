import React from 'react';

import Circle from '../Circle';
import './style.css';

const Panel = ({selected, items, active, onClickColor, onClickToy, onClickRemoveToys, colorChoiceOnly, toTakeOff}) => (
  <div className="Panel">
    {items.map(({fill, id, icon, name}) =>
      <div
        key={id}
        className="Panel--Item"> 
        {colorChoiceOnly ?
          <Circle
            id={id}
            fill={fill}
            selected={selected} 
            onClick={onClickColor} />
            :
            <span
              className="Wearable"
              key={id}
              onClick={() => onClickToy(id, active)}>
              <img src={icon} alt={name} />
            </span>}
      </div>)}

      {toTakeOff && selected !== 'toys' &&
        <div className="Panel--Item">
          <Circle
            isReset={true}
            selected={selected}
            onClick={() => onClickColor(null, selected)} />
        </div>}

      {toTakeOff && selected === 'toys' &&
        <div className="Panel--Item">
          <Circle
            isReset={true}
            selected={selected}
            onClick={onClickRemoveToys} />
        </div>}
  </div>
);

export default Panel;