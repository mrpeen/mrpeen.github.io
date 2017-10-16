import React from 'react';

import './style.css';

const Circle = ({fill, onClick, id, selected, isReset, background}) => {
  if (isReset) {
    return (
      <span
        onClick={onClick}
        className="Circle Circle--reset">
        <span className="Circle--label">
          Clear
        </span>
      </span>
    )
  }
  if (background) {
    return (
      <span
        onClick={() => onClick(id)}
        style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}
        className="Circle" />
    )
  }
  return (
    <span
      onClick={() => onClick(id, selected)}
      style={{backgroundColor: fill}}
      className="Circle" />
  )
};

export default Circle;