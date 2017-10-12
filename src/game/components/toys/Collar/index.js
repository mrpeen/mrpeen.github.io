import React from 'react';

import './style.css';

const Collar = ({fill = '#333', stroke = '#231F20'}) => (
  <svg className="Collar" xmlns='http://www.w3.org/2000/svg' viewBox='0 -300.375 1169.547 1092.375'>
    <g id='Collar' strokeMiterlimit='10'>
      <path fill={fill} stroke={stroke} strokeWidth='3' d='M540.5,455.64l-127.28,8.9h-0.01l-14.469,1.01 L92.5,486.94l6.46-55.08l427.03-29.85C531.258,420.31,536.129,438.22,540.5,455.64z' />
      <line fill='none' stroke='#231F20' strokeWidth='3' strokeDasharray='10' x1='98.282' y1='437.645' x2='527.688' y2='407.946' />
      <line fill='none' stroke='#231F20' strokeWidth='3' strokeDasharray='10' x1='92.5' y1='482.5' x2='539.186' y2='450.453' />
      <circle display='none' fill='none' stroke='#7B7979' strokeWidth='9' cx='322.891' cy='482.086' r='30.414' />
      <path fill='#BFBFBF' stroke='#7B7979' strokeWidth='2' d='M310.141,437.735 c-19.231,1.369-33.722,18.071-32.351,37.312c1.37,19.231,18.081,33.721,37.312,32.351c19.241-1.37,33.721-18.081,32.351-37.312 C346.083,450.845,329.382,436.365,310.141,437.735z M314.474,498.581c-14.364,1.023-26.844-9.798-27.867-24.161 c-1.024-14.374,9.798-26.844,24.162-27.867c14.364-1.023,26.843,9.788,27.867,24.162 C339.658,485.078,328.837,497.558,314.474,498.581z' />
      <ellipse transform='rotate(-4.052 310.92 444.486)' fill='#BFBFBF' stroke='#7B7979' strokeWidth='2' cx='310.615' cy='444.383' rx='15.342' ry='15.342' />
    </g>
  </svg>
);

export default Collar;