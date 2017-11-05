import React from 'react';

import './style.css';

const PanelItem = ({children, type = 'item'}) => (
  <div className={`PanelItem--${type}`}> 
    {children}
  </div>
);

export default PanelItem;