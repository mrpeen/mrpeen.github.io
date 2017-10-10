import React from 'react';

import './style.css';

const Circle = ({fill, onClick, id, selected, isReset}) => {
  return (
    isReset ?
    <span
      onClick={() => onClick(null, selected)}
      className="Circle Circle--reset">
      <span className="Circle--label">
        Take off
      </span>
    </span>
    :
    <span
      onClick={() => onClick(id, selected)}
      style={{backgroundColor: fill}}
      className="Circle" /> )};

export default Circle;