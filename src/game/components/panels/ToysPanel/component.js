import React from 'react';

import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';
import PanelItemIcon from '../atoms/PanelItemIcon';
import NavigationArrow from '../atoms/NavigationArrow';

const ToysPanel = ({
  onClickClear,
  onClick,
  active,
  isDesktop,
  currentChunk,
  onClickNavArrow,
  items
}) => {
    
  const visibleItems = isDesktop ? items : items[currentChunk];

  return (
    <div className="ToysPanel">
      {!isDesktop &&
        <PanelItem type="arrow">
          <NavigationArrow
            direction="left"
            onClick={() => onClickNavArrow('back')} />
        </PanelItem>}

      {visibleItems.map(({id, clears, component, name}) => 
        <PanelItem key={id}>
          <PanelItemIcon
            key={id}
            onClick={() => onClick(id, active, clears)}
            name={name}>
            {component}
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
}

export default ToysPanel;