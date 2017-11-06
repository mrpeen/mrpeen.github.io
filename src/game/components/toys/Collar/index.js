import React from 'react';

import './style.css';

const Collar = ({fill = '#333', stroke = '#231F20', type = 'portrait'}) => (
  <svg className={`Collar--${type}`} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 451.59 108.06' width="225px">
    <g id='Ebene_2' dataname='Ebene 2'>
      <g id='Collar' strokeMiterlimit='10'>
        <path d='M449.7,55.21l-127.28,8.9h0l-14.47,1L1.7,86.51,8.16,31.43l427-29.85Q443.09,29,449.7,55.21Z' fill={fill} stroke={stroke} strokeWidth='3' />
        <line x1='7.48' y1='37.22' x2='436.89' y2='7.52' fill='none' stroke='#231f20' strokeWidth='3' strokeDasharray='10' />
        <line x1='1.7' y1='82.07' x2='448.39' y2='50.02' fill='none' stroke='#231f20' strokeWidth='3' strokeDasharray='10' />
        <path d='M219.34,37.31a34.92,34.92,0,1,0,37.31,32.35A34.92,34.92,0,0,0,219.34,37.31Zm4.33,60.85a26.08,26.08,0,1,1,24.16-27.87A26.08,26.08,0,0,1,223.67,98.15Z' fill='#bfbfbf' stroke='#7b7979' strokeWidth='2' />
        <circle cx='219.82' cy='43.95' r='15.34' transform='rotate(-4.07 220.062 44.03)' fill='#bfbfbf' stroke='#7b7979' strokeWidth='2' />
      </g>
    </g>
  </svg>
);

export default Collar;