import React from 'react';

import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';

const MakeUpPanel = ({items, active, onClick}) => (
  <div className="MakeUpPanel">
    {items.map(({fill, id}) => 
      <PanelItem key={id}>
          <Circle
            id={id}
            fill={fill}
            onClick={onClick} />
      </PanelItem>)}
  </div>
);

export default MakeUpPanel;