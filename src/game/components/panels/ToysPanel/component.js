import React from 'react';

import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';

const ToysPanel = ({items, active, onClick, onClickClear}) => (
  <div className="ToysPanel">
    {items.map(({id, clears, icon, name}) => 
      <PanelItem key={id}>
        <span
          className="ItemIcon"
          key={id}
          onClick={() => onClick(id, active, clears)}>
          <img src={icon} alt={name} />
        </span>
      </PanelItem>)}

    <PanelItem>
      <Circle
        isReset={true}
        onClick={onClickClear} />
    </PanelItem>
  </div>
);

export default ToysPanel;