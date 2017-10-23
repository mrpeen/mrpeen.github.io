import React from 'react';

import './style.css';

const Dildo = ({skintone}) => (
  <svg className="Dildo" viewBox="0 0 253.8 187.33">
    <g id="Ebene_2">
      <g id="Realistic_Dildo">
        <path d="M2.74,116.82l9.58,35.47c23.15,60.45,113.59,33.22,65.42-34.16C95.42,105.72,119.39,96.72,145.67,89c37.45-1.21,72.47-12.18,89.44-23.22,27.49-6.07,23.9-42.56-24.6-41.44-9.5,1-19.53-10.46-23,5.05C183,20.87,74.9,51.16,17.65,81.78,1.62,88.43-.38,101.46,2.74,116.82Z" fill="#c0a58d" stroke="#b5917c" strokeWidth="3"/>
        <path d="M77.74,118.13Q62,103.43,46.2,103.7" fill="#c0a58d" stroke="#b5917c" strokeWidth="3"/>
        <path d="M235.11,65.75c-21.2-2.88-36.78-15.51-47.59-36.39" fill="#c0a58d" stroke="#b5917c" strokeWidth="3"/>
        <path d="M138.06,4A47,47,0,0,1,145,20.33c5.93,27.62-13.86,55.25-44.17,61.76S41.1,71.48,35.17,43.86a46.89,46.89,0,0,1-.39-17.71" fill={skintone.fill} stroke={skintone.stroke} strokeLinecap="round" strokeWidth="8"/>
      </g>
    </g>
  </svg>
);

export default Dildo;