import React from 'react';

import './style.css';

const PanelItemIcon = ({icon, name, onClick, children}) => (
  <span
    className="PanelItemIcon"
    onClick={onClick}>
    {icon ?
      <img src={icon} alt={name} />
      : children}
  </span>
);

export default PanelItemIcon;