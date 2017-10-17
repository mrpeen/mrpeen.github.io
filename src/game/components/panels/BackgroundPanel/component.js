import React from 'react';

import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';

const BackgroundPanel = ({items, active, onClick}) => (
  <div className="BackgroundPanel">
    {items.map(({fill, id, icon}) => 
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
  </div>
);

export default BackgroundPanel;