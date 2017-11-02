import React from 'react';

import {
  Blush,
  EyeShadow
} from '../../makeUp';
import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';
import PanelItemIcon from '../atoms/PanelItemIcon';

const MakeUpPanel = ({items, active, onClick, onClickClear}) => (
  <div className="MakeUpPanel">
    {items.map(({fill, id, type, icon, clears}) => 
      <PanelItem key={id}>
        <PanelItemIcon
          icon={icon}
          onClick={() => onClick(id, active, clears, type)}>
          {type === 'blush' && <Blush color={fill} />}
          {type === 'eyeshadow' && <EyeShadow color={fill} type='icon' />}
        </PanelItemIcon>
      </PanelItem>)}

      <PanelItem>
        <Circle
          isReset={true}
          onClick={onClickClear} />
      </PanelItem>
  </div>
);

export default MakeUpPanel;