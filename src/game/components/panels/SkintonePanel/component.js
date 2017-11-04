import React from 'react';

import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';
import NavigationArrow from '../atoms/NavigationArrow';

const SkintonePanel = ({
  items,
  active,
  onClick,
  isTablet,
  currentChunk,
  onClickNavArrow
}) => {

  const visibleItems = isTablet ? items[currentChunk] : items;

  return (
    <div className="SkintonePanel">
      {isTablet &&
        <PanelItem type="arrow">
          <NavigationArrow
            direction="left"
            onClick={() => onClickNavArrow('back')} />
        </PanelItem>}

      {visibleItems.map(({fill, id}) => 
        <PanelItem key={id}> 
          <Circle
            id={id}
            fill={fill}
            onClick={onClick} />
        </PanelItem>)}

      {isTablet &&
        <PanelItem type="arrow">
          <NavigationArrow
            direction="right"
            onClick={() => onClickNavArrow('forward')} />
        </PanelItem>}
    </div> )
};

export default SkintonePanel;