import React from 'react';

import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';
import PanelItemIcon from '../atoms/PanelItemIcon';

const ToysPanel = ({items, active, onClick, onClickClear}) => (
  <div className="ToysPanel">
    {items.map(({id, clears, icon, name}) => 
      <PanelItem key={id}>
        <PanelItemIcon
          key={id}
          onClick={() => onClick(id, active, clears)}
          icon={icon}
          name={name} />
      </PanelItem>)}

    <PanelItem>
      <Circle
        isReset={true}
        onClick={onClickClear} />
    </PanelItem>
  </div>
);

export default ToysPanel;