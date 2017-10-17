import React from 'react';

import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';

const SkintonePanel = ({items, active, onClick}) => (
  <div className="SkintonePanel">
    {items.map(({fill, id}) => 
      <PanelItem key={id}> 
        <Circle
          id={id}
          fill={fill}
          onClick={onClick} />
      </PanelItem>)}
  </div>
);

export default SkintonePanel;