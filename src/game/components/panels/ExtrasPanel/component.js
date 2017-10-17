import React from 'react';

import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';

const ExtrasPanel = ({items, active, onClick}) => (
  <div className="ExtrasPanel">
    {items.map(({fill, id}) => 
      <PanelItem key={id}>
        <Circle
          id={id}
          fill={fill}
          onClick={onClick} />
      </PanelItem>)}

      <PanelItem>
        <Circle
          isReset={true}
          onClick={() => onClick(null)} />
      </PanelItem>
  </div>
);

export default ExtrasPanel;