import React from 'react';

import {
  Blush,
  EyeShadow
} from '../../makeUp';
import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';
import PanelItemIcon from '../atoms/PanelItemIcon';
import NavigationArrow from '../atoms/NavigationArrow';


const MakeUpPanel = ({
  items,
  active,
  onClick,
  onClickClear,
  isDesktop,
  currentChunk,
  onClickNavArrow
}) => {
  
  const visibleItems = isDesktop ? items : items[currentChunk];

  return (
    <div className="MakeUpPanel">
      {!isDesktop &&
        <PanelItem type="arrow">
          <NavigationArrow
            direction="left"
            onClick={() => onClickNavArrow('back')} />
        </PanelItem>}

      {visibleItems.map(({fill, id, type, icon, clears}) => 
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

      {!isDesktop &&
        <PanelItem type="arrow">
          <NavigationArrow
            direction="right"
            onClick={() => onClickNavArrow('forward')} />
        </PanelItem>}
    </div>)
};

export default MakeUpPanel;