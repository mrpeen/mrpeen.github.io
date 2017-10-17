import React from 'react';

import './style.css';

const PanelItemIcon = ({icon, name, onClick}) => (
  <span
    className="PanelItemIcon"
    onClick={onClick}>
    <img src={icon} alt={name} />
  </span>
);

export default PanelItemIcon;