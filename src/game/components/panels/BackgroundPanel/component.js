import React from 'react';

import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';
import NavigationArrow from '../atoms/NavigationArrow';

const BackgroundPanel = ({
  items,
  active,
  onClick,
  isDesktop,
  currentChunk,
  onClickNavArrow
}) => {

  const visibleItems = isDesktop ? items : items[currentChunk];

  return (
    <div className="BackgroundPanel">
      {!isDesktop &&
        <PanelItem type="arrow">
          <NavigationArrow
            direction="left"
            onClick={() => onClickNavArrow('back')} />
        </PanelItem>}

      {visibleItems.map(({fill, id, icon}) => 
        <PanelItem key={id}>
          <Circle
            id={id}
            fill={fill}
            background={icon}
            onClick={onClick} />
        </PanelItem>)}

      <PanelItem>
        <Circle
          isReset={true}
          onClick={() => onClick(null)} />
      </PanelItem>

      {!isDesktop &&
        <PanelItem type="arrow">
          <NavigationArrow
            direction="right"
            onClick={() => onClickNavArrow('forward')} />
        </PanelItem>}
    </div> )};

export default BackgroundPanel;