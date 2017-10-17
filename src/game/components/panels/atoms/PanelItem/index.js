import React from 'react';

import './style.css';

const PanelItem = ({children}) => (
  <div className="PanelItem"> 
    {children}
  </div>
);

export default PanelItem;