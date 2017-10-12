import React from 'react';

import './style.css';

const HeartCollar = ({fill = '#7ACED6', stroke = '#12AEBC', metalFill = '#DBDADA', metalStroke = '#666'}) => (
  <svg className="HeartCollar" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 451.59 119.1'>
    <g id='Ebene_2' dataname='Ebene 2'>
      <g id='Heart_Collar' dataname='Heart Collar'>
        <path d='M265.8,3.14c-13.33-6-30.9,1.09-44.51,16.41-15.88-13-34.35-17.2-46.55-9.11-31,22-18.37,77,2.54,84L229.17,118l47.47-31.52C296.2,76.26,299.88,20,265.8,3.14Zm2.58,80.1-39.87,26.46L184.95,89.93c-17.57-5.84-28.14-52-2.14-70.51,10.24-6.79,25.76-3.23,39.08,7.65,11.43-12.87,26.18-18.85,37.38-13.78C287.89,27.42,284.79,74.68,268.38,83.24Z' fill={metalFill} stroke={metalStroke} strokeMiterlimit='10' strokeWidth='2' />
        <polygon points='180.53 79.24 180.86 84 1.7 96.51 2.23 92.03 7.48 47.21 8.16 41.43 177.1 29.62 177.5 35.45 180.53 79.24' fill={fill} stroke={stroke} strokeMiterlimit='10' strokeWidth='3' />
        <path d='M449.7,65.21l-127.28,8.9h0l-14.47,1-36.77,2.57-.34-4.93-3-43.55-.41-5.9L435.19,11.58q.85,3,1.7,5.94,6.17,21.66,11.5,42.5Q449.05,62.61,449.7,65.21Z' fill={fill} stroke={stroke} strokeMiterlimit='10' strokeWidth='3' />
        <line x1='436.89' y1='17.52' x2='267.82' y2='29.21' fill='none' stroke={stroke} strokeMiterlimit='10' strokeWidth='3' strokeDasharray='10' />
        <line x1='177.5' y1='35.45' x2='7.48' y2='47.21' fill='none' stroke={stroke} strokeMiterlimit='10' strokeWidth='3' strokeDasharray='10' />
        <line x1='448.39' y1='60.02' x2='270.83' y2='72.76' fill='none' stroke={stroke} strokeMiterlimit='10' strokeWidth='3' strokeDasharray='10' />
        <polyline points='180.53 79.24 2.23 92.03 1.7 92.07' fill='none' stroke={stroke} strokeMiterlimit='10' strokeWidth='3' strokeDasharray='10' />
        <circle cx='308.24' cy='47.21' r='6.89' transform='translate(-2.19 17.7)' fill={metalFill} />
        <circle cx='139.24' cy='60.6' r='6.89' transform='translate(-3.24 8.06)' fill={metalFill} />
      </g>
    </g>
  </svg>
);

export default HeartCollar;