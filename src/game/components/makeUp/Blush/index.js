import React from 'react';

import './style.css';

const Blush = ({color, type = "icon"}) => (
  <svg className={`Blush--${type}`} viewBox="0 0 388.89 115.69">
    <g id="Ebene_2">
      <g id="Layer_1">
        <path d="M134,88.84v1.58c1,13.69,15.07,23.84,31.46,22.68a34,34,0,0,0,15-4.64c7.89-4.71,13-12.45,12.9-20.94,0-.45,0-.9-.06-1.35s-.16-1.06-.16-1.57" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="7"/>
        <path d="M252.63,80.33c1,13.67-11.5,25.75-27.89,26.93a34.25,34.25,0,0,1-13.19-1.58h0c-9.12-3-16-9.74-17.83-18.19a18.73,18.73,0,0,1-.43-2.91" fill="none" stroke="#000" strokeLinecap="round" strokeWidth="7"/>
        <ellipse cx="44.3" cy="80.31" fill={color} rx="44.3" ry="15.29"/>
        <ellipse cx="344.6" cy="61.14" fill={color} rx="44.3" ry="15.29"/>
        <circle cx="46.97" cy="35.22" r="17.61"/>
        <circle cx="51.42" cy="26.06" fill="#fff" r="3.5"/>
        <circle cx="57.21" cy="31.84" fill="#fff" r="2.3"/>
        <circle cx="344.6" cy="17.61" r="17.61"/>
        <circle cx="349.03" cy="8.45" fill="#fff" r="3.5"/>
        <circle cx="354.83" cy="14.23" fill="#fff" r="2.3"/>
      </g>
    </g>
  </svg>
);

export default Blush;