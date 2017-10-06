import React from 'react';

import './style.css';

const toTakeOff = ['condom'];

const Panel = ({selected, items, active, onClickItem}) => (
  <div className="Panel">
    {items.map(({fill, id}) =>
      <div
        key={fill}
        className="Panel--Item"> 
        <span
          onClick={() => onClickItem(id, selected)}
          style={{backgroundColor: fill}}
          className="Circle" />
      </div>)}

      {(toTakeOff.indexOf(selected) !== -1) &&
        <div className="Panel--Item">
          <span
            onClick={() => onClickItem(null, selected)}
            className="Circle Circle--reset">
            <span className="Circle--label">
              Take off
            </span>
          </span>
        </div>}
  </div>
);

export default Panel;