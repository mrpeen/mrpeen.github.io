import React from 'react';

import Condom from '../../Condom';
import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';
import PanelItemIcon from '../atoms/PanelItemIcon';

const getIcon = (item) => {
  switch(item.type) {
    case 'condom':
      return <Condom
              color={item.fill}
              type='icon' />
    default:
      return ''
  }
}

const ExtrasPanel = ({items, active, onClick}) => (
  <div className="ExtrasPanel">
    {items.map((item) => 
      <PanelItem key={item.id}>
        <PanelItemIcon
          key={item.id}
          onClick={() => onClick(item.id, active, item.clears)}>
          {getIcon(item)}
        </PanelItemIcon>
      </PanelItem>)}

      <PanelItem>
        <Circle
          isReset={true}
          onClick={() => onClick(null)} />
      </PanelItem>
  </div>
);

export default ExtrasPanel;