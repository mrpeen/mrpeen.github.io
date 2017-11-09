import React from 'react';

import Peen from '../../Peen';
import Condom from '../../Condom';
import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';
import PanelItemIcon from '../atoms/PanelItemIcon';
import NavigationArrow from '../atoms/NavigationArrow';


const ExtrasPanel = ({
  items,
  active,
  onClick,
  onClickClear,
  isDesktop,
  windowWidth,
  currentChunk,
  onClickNavArrow
}) => {

  const visibleItems = isDesktop ? items : items[currentChunk];

  return (
    <div className="ExtrasPanel">
    {!isDesktop &&
      <PanelItem type="arrow">
        <NavigationArrow
          direction="left"
          onClick={() => onClickNavArrow('back')} />
      </PanelItem>}

      {visibleItems.map(({id, fill, icon, clears, type, stroke}) => {
        if (windowWidth <= 750 && type === "thoughtBubble") return;
        return (
          <PanelItem key={id}>
            <PanelItemIcon
              key={id}
              icon={icon}
              onClick={() => onClick(id, active, clears)}>
              {type === 'condom' && <Condom color={fill} type='icon' />}
              {type === 'peen' && <Peen skintone={{fill: fill, stroke: stroke}} type='icon' blush="#ff81d2" />}
            </PanelItemIcon>
          </PanelItem>
        )
      })}

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
    </div>
)};

export default ExtrasPanel;