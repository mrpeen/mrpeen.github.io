import React from 'react';

import Circle from '../Circle';
import SkintonePanel from '../SkintonePanel';
import MakeUpPanel from '../MakeUpPanel'; 
import './style.css';

const getItem = (
  {type, fill, id, clears, icon, name},
  selected,
  active,
  onClickToy,
  onClickColor,
  onClickBackground) => {
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
                background={icon}
                onClick={onClickBackground} />)
  }
}

const Panel = ({
  selected,
  items,
  active,
  onClickColor,
  onClickToy,
  onClickRemoveToys,
  toClear,
  onClickBackground
}) => (
  <div className="Panel">

    {selected === 'skintone' && <SkintonePanel />}

    {selected === 'makeUp' && <MakeUpPanel />}

    {/* {items.map((item) => 
      <div
        key={item.id}
        className="Panel--Item"> 
          {getItem(item, selected, active, onClickToy, onClickColor, onClickBackground)}
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
            onClick={() => onClickBackground(null)} />
        </div>} */}
  </div>
);

export default Panel;