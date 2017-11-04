import React from 'react';

import './style.css';

const Arrow = ({direction, onClick}) => (
  <div
    className={`Arrow--${direction}`}
    onClick={onClick} />
);

export default Arrow;