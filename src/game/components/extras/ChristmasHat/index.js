import React from 'react';

import './style.css';

const ChristmasHat = ({type = 'portrait'}) => (
  <svg className={`ChristmasHat--${type}`} viewBox="0 0 539.2 370.3">
    <g id="Ebene_2">
      <g id="Hat">
        <path d="M498.21,134.17a31.86,31.86,0,0,0-10.79,5.33,32,32,0,0,0-45.19,1.83,32,32,0,0,0-55.13,7.21A32,32,0,0,0,334,146,32,32,0,0,0,281,148.19a32,32,0,0,0-52.94,8.05,32,32,0,0,0-53.35,8.09,31,31,0,0,0-2.27,7.54,32,32,0,0,0-50.62,33.64C72.7,203,51,269.7,32.49,322.83.5-13.58,377.3-105.07,498.21,134.17Z" fill="#ed1c24"/>
        <path d="M538.7,165A32,32,0,0,1,485,188.53a32,32,0,0,1-44.79-6.22,32,32,0,0,1-50.92-5.21A32,32,0,0,1,334,184a32,32,0,0,1-49.56,2.32,32,32,0,0,1-51.3,4.19,32,32,0,0,1-48.89,11.87,32,32,0,1,1-11.74-30.53,31,31,0,0,1,2.27-7.54,32,32,0,0,1,53.35-8.09A32,32,0,0,1,281,148.19,32,32,0,0,1,334,146a32,32,0,0,1,53.13,2.53,32,32,0,0,1,55.13-7.21,32,32,0,0,1,45.19-1.83,31.86,31.86,0,0,1,10.79-5.33A32,32,0,0,1,538.7,165Z" fill="#fff" stroke="#000"/>
        <circle cx="32.49" cy="337.82" fill="#fff" r="31.99" stroke="#000" />
      </g>
    </g>
  </svg>
);

export default ChristmasHat;