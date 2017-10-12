import React from 'react';

import Circle from '../Circle';
import './style.css';

const getItem = (
  {type, fill, id, clears, icon, name},
  selected,
  active,
  onClickToy,
  onClickColor) => {
  switch(type) {
    case 'color':
      return (<Circle
                id={id}
                fill={fill}
                selected={selected} 
                onClick={onClickColor} />)
    case 'icon':
      return (<span
                className="Wearable"
                key={id}
                onClick={() => onClickToy(id, active, clears)}>
                <img src={icon} alt={name} />
              </span>)
    default: 
      return (<Circle
                id={id}
                background={fill} />)
  }
}

const Panel = ({selected, items, active, onClickColor, onClickToy, onClickRemoveToys, toClear}) => (
  <div className="Panel">
    {items.map((item) => 
      <div
        key={item.id}
        className="Panel--Item"> 
          {getItem(item, selected, active, onClickToy, onClickColor)}
      </div>)}

      {toClear && selected === 'condom' &&
        <div className="Panel--Item">
          <Circle
            isReset={true}
            selected={selected}
            onClick={() => onClickColor(null, selected)} />
        </div>}

      {toClear && selected === 'toys' &&
        <div className="Panel--Item">
          <Circle
            isReset={true}
            selected={selected}
            onClick={onClickRemoveToys} />
        </div>}

      {toClear && selected === 'background' &&
        <div className="Panel--Item">
          <Circle
            isReset={true}
            selected={selected}
            text="Clear"
            onClick={() => {}} />
        </div>}
  </div>
);

export default Panel;