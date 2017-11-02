import React from 'react';

import './style.css';

const EyeShadow = ({color, type}) => (
  <svg className={`EyeShadow--${type}`} viewBox="0 0 365.61 76.97">
    <g id="Ebene_2">
      <g id="EyeShadow">
        <circle cx="336.36" cy="29.25" fill={color} r="29.25"/>
        <circle cx="29.25" cy="47.72" fill={color} r="29.25"/>
        <path d="M20.74,69.26s0,0,0,0" fill="none" stroke="#000"/>
        <path d="M37.86,75.27h0" fill="none" stroke="#000"/>
        <line fill="none" stroke="#000" x1="31.2" x2="31.19" y1="40.69" y2="40.69"/>
        <path d="M34.3,40.77A17.61,17.61,0,1,1,16.68,58.38,17.61,17.61,0,0,1,34.3,40.77Z"/>
        <path d="M38.75,45.72a3.5,3.5,0,1,1-3.5,3.5A3.5,3.5,0,0,1,38.75,45.72Z" fill="#fff"/>
        <path d="M44.53,52.7a2.3,2.3,0,1,1-2.3,2.3A2.3,2.3,0,0,1,44.53,52.7Z" fill="#fff"/>
        <path d="M331.92,23.16a17.61,17.61,0,1,1-17.61,17.61A17.6,17.6,0,0,1,331.92,23.16Z"/>
        <path d="M336.36,28.11a3.5,3.5,0,1,1-3.5,3.5A3.5,3.5,0,0,1,336.36,28.11Z" fill="#fff"/>
        <circle cx="342.16" cy="37.39" fill="#fff" r="2.3" transform="translate(11.41 132.66) rotate(-22.3)"/>
      </g>
    </g>
  </svg>
);

export default EyeShadow;