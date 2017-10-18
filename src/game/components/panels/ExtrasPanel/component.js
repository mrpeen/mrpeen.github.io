import React from 'react';

import Condom from '../../Condom';
import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';
import PanelItemIcon from '../atoms/PanelItemIcon';

const ExtrasPanel = ({items, active, onClick}) => (
  <div className="ExtrasPanel">
    {items.map(({id, fill, icon, clears, type}) => 
      <PanelItem key={id}>
        <PanelItemIcon
          key={id}
          icon={icon}
          onClick={() => onClick(id, active, clears)}>
          {type === 'condom' && <Condom color={fill} type='icon' />}
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