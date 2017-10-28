import React from 'react';

import Blush from '../../Blush';
import PanelItem from '../atoms/PanelItem';
import PanelItemIcon from '../atoms/PanelItemIcon';

const MakeUpPanel = ({items, active, onClick}) => (
  <div className="MakeUpPanel">
    {items.map(({fill, id, type}) => 
      <PanelItem key={id}>
        <PanelItemIcon onClick={() => onClick(id)}>
          {type === 'blush' && <Blush color={fill} />}
        </PanelItemIcon>
      </PanelItem>)}
  </div>
);

export default MakeUpPanel;