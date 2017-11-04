import React from 'react';

import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';
import PanelItemIcon from '../atoms/PanelItemIcon';
import NavigationArrow from '../atoms/NavigationArrow';

const ToysPanel = ({
  onClickClear,
  onClick,
  active,
  isTablet,
  currentChunk,
  onClickNavArrow,
  items
}) => {
    
  const visibleItems = isTablet ? items[currentChunk] : items;

  return (
    <div className="ToysPanel">
      {isTablet &&
        <PanelItem type="arrow">
          <NavigationArrow
            direction="left"
            onClick={() => onClickNavArrow('back')} />
        </PanelItem>}

      {visibleItems.map(({id, clears, icon, name}) => 
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

      {isTablet &&
        <PanelItem type="arrow">
          <NavigationArrow
            direction="right"
            onClick={() => onClickNavArrow('forward')} />
        </PanelItem>}
    </div>)
}

export default ToysPanel;