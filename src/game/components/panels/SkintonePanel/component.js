import React from 'react';

import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';
import NavigationArrow from '../atoms/NavigationArrow';

const SkintonePanel = ({
  items,
  active,
  onClick,
  isDesktop,
  currentChunk,
  onClickNavArrow
}) => {

  const visibleItems = isDesktop ? items : items[currentChunk];

  return (
    <div className="SkintonePanel">
      {!isDesktop &&
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

      {!isDesktop &&
        <PanelItem type="arrow">
          <NavigationArrow
            direction="right"
            onClick={() => onClickNavArrow('forward')} />
        </PanelItem>}
    </div> )
};

export default SkintonePanel;