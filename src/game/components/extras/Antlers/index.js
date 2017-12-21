import React from 'react';

import './style.css';

const Antlers = ({type = 'portrait'}) => (
<svg viewBox="0 0 791.74 359.21" className={`Antlers--${type}`} width="392px">
  <g id="Ebene_2">
    <g id="Antlers">
      <path d="M594.05,318.77a9.61,9.61,0,0,1-15.36,7.51q-1.66-2.31-3.34-4.56c-60.7-81.84-134.06-117.83-198.26-92.65-68.54.22-117.12,46.81-154.21,120.15-.38.75-.76,1.5-1.13,2.25A9.62,9.62,0,0,1,205,350.09l-.7-5.8q-.5-5.21-.49-10.51c0-81.37,87.58-147.34,195.61-147.34,99.83,0,182.19,56.33,194.11,129.1C593.74,316.61,593.9,317.69,594.05,318.77Z" fill="#9e6327" stroke="#643606" strokeLinecap="round" strokeWidth="7"/>
      <path d="M273.45,245.16c-2.74,7.11-11.11,9.86-18.76,11-20.13-6.37-34-26.53-44.1-45.78-4.34-8.32-8.61-17-15.74-23.12s-18.09-8.85-26-3.79c-3.83,2.46-6.43,6.37-9.31,9.88-14.76,18-38.39,26.93-61.62,28.57-11.8.84-24.43-.24-34-7.19-2.42-1.77-4.68-4-5.63-6.83-1.3-3.92.14-8.31,2.55-11.67,6.67-9.28,19.28-11.9,30.72-12.27s23.36.7,33.83-3.92a33.46,33.46,0,0,0,15.53-14.05c3.89-6.88,4.89-16.35-.5-22.13-8.92-9.57-24.91-1.51-37.82-3.7-7.07-1.21-13.12-5.6-18.79-10C63.29,114.29,42.12,96.12,16.3,94c-4.28-.35-9.46-.76-11.36-4.61-1-2-.72-4.43-.17-6.62,4.55-18,25.51-28.49,43.84-25.52S82.12,73.74,91.89,89.53c5,8.06,11.68,18.24,21,16.26,6.47-1.39,10.18-8.85,9.52-15.43S117.79,78,113.69,72.78c-14.17-18.06-33.16-36.05-32.26-59C90.84,6,105,13.24,114,21.46,136.48,42.1,152.18,68.91,169,94.4c29.49,44.64,63.3,86.22,96.68,128C270.93,229,276.48,237.32,273.45,245.16Z" fill="#9e6327"/>
      <path d="M269.57,242.89c-2.19,4.9-9.18,9.15-14.72,8.67-2.18-.19-5.33-2.38-7.24-3.48a52,52,0,0,1-8.07-5.74c-10.24-8.84-17.66-20.44-24-32.27-6.19-11.56-12.19-24.86-24.73-30.78-5.51-2.6-11.82-3.78-17.82-2.41-6.4,1.47-10.78,5.91-14.74,10.86-17.07,21.41-45.43,31.79-72.53,29.66-6.87-.54-14.36-2.4-19.82-6.82-6.93-5.62-1.71-13.31,4.38-17,11.68-7.16,26.43-4.61,39.4-5.56,13.65-1,26.14-6.08,33.92-17.83,6.23-9.41,7.67-23.63-2-31.31-10-7.92-23.33-2.49-34.74-2.85-7.24-.22-13.16-4-18.79-8.23S76.84,119,71.16,114.71C60.27,106.49,48.87,98.83,36.05,94A76.19,76.19,0,0,0,16.3,89.47c-2.53-.25-7.06,0-7.53-3.36-.41-2.9,2-7.08,3.44-9.45,6-9.73,17.92-15.16,29.11-15.43,13.16-.31,25.43,6.54,34.64,15.5A81.52,81.52,0,0,1,88,91.81c3.18,5,6.44,10.29,11.08,14.13,9.21,7.64,22,4.9,26.41-6.51,5-12.89-4.31-24.61-12-34C105.1,55.11,95.84,45.11,90.13,33a42.46,42.46,0,0,1-4.2-19.21L83.7,17.67c14.81-11,34.27,13.41,42.53,23.16,12.44,14.7,22.75,31,33.22,47.15C182,122.74,207,155.76,232.72,188.25q10.68,13.49,21.44,26.91c5.86,7.33,18.27,18.38,15,28.81-1.76,5.53,6.92,7.9,8.67,2.39,2.94-9.22-1.74-17.76-7.23-25-6.72-8.83-13.85-17.38-20.77-26C235.34,177.23,221,159,207.08,140.47c-13.55-18.12-26.58-36.61-38.92-55.58C157,67.65,145.92,50.2,132.59,34.47,122.08,22.06,106.12,3.34,87.69,6.26c-3.29.52-7.76,2-9.8,4.8-2.27,3.14-.81,9.3-.16,12.85,1.6,8.71,5.81,16.84,10.72,24.12,5.2,7.7,11.29,14.75,17.19,21.91,5.52,6.69,14.91,16.29,11.65,25.84-1.35,3.93-4.67,6.66-8.9,5.38s-7.26-5.78-9.57-9.16c-5-7.37-9.56-14.76-15.95-21.1C70.77,58.87,54,50.44,36.65,52.6,21.28,54.51,6.46,64,1.19,79-1.73,87.37.58,95.5,9.8,97.64c3.82.89,7.81.82,11.66,1.53A70.28,70.28,0,0,1,37,104c17.86,7.88,32.26,21.17,47.87,32.52,7.76,5.65,15.93,8.91,25.63,8.4,7.43-.39,18.53-4.06,25.16.7,8.23,5.9,2.53,18.18-2.92,23.82-7.52,7.79-17.81,9.51-28.21,9.78-16.67.44-37.58-.6-48,15.34-12.78,19.59,13.86,30.63,29.2,31.84,18.26,1.43,37.89-2.94,54-11.49a75.84,75.84,0,0,0,21.46-16.66c6.29-7.13,11-15.21,21.9-12.29,10.09,2.7,15.85,12.13,20.5,20.74,4.49,8.34,8.76,16.71,14.21,24.49a91.33,91.33,0,0,0,18.22,19.87c6.18,4.82,14.46,10.53,22.55,8.93,7.64-1.51,15.4-5.09,18.74-12.56C279.69,242.19,271.93,237.61,269.57,242.89Z" fill="#643606"/>
      <path d="M518.32,239.16c2.74,7.11,11.12,9.86,18.77,11,20.13-6.37,34-26.53,44.09-45.78,4.35-8.32,8.61-17,15.74-23.12s18.1-8.85,26-3.79c3.82,2.46,6.42,6.37,9.31,9.88,14.76,18,38.39,26.93,61.61,28.57,11.8.84,24.44-.24,34-7.19,2.42-1.77,4.67-4,5.62-6.83,1.31-3.92-.13-8.31-2.55-11.67-6.67-9.28-19.28-11.9-30.71-12.27s-23.36.7-33.83-3.92a33.53,33.53,0,0,1-15.54-14.05c-3.89-6.88-4.88-16.35.51-22.13,8.91-9.57,24.91-1.51,37.81-3.7,7.08-1.21,13.13-5.6,18.8-10,20.52-15.84,41.68-34,67.51-36.16,4.28-.35,9.46-.76,11.36-4.61,1-2,.71-4.43.17-6.62-4.56-18-25.51-28.49-43.85-25.52s-33.5,16.52-43.28,32.31c-5,8.06-11.67,18.24-20.94,16.26-6.47-1.39-10.19-8.85-9.52-15.43S674,72,678.08,66.78c14.18-18.06,33.16-36,32.27-59-9.42-7.74-23.53-.54-32.52,7.68C655.3,36.1,639.59,62.91,622.76,88.4c-29.49,44.64-63.3,86.22-96.68,128C520.84,223,515.29,231.32,518.32,239.16Z" fill="#9e6327"/>
      <path d="M514.44,241.43c3.33,7.45,11.1,11.06,18.73,12.56,8.11,1.59,16.37-4.11,22.55-8.93,14.84-11.58,23.69-28.12,32.44-44.36,4.64-8.59,10.41-18.07,20.49-20.74,11.26-3,15.9,5.66,22.42,12.87,12.31,13.65,29.85,21.93,47.67,25.51,17.26,3.47,39.14,4.77,53.49-7.4,7.2-6.1,7.85-15.37,2.59-23-4.72-6.86-12.49-10.86-20.42-12.74-18.39-4.38-41.56,3.3-55.89-12.28-5.31-5.78-10.56-18.35-1.78-23.69,6.94-4.23,17.75-.54,25.29-.24,19.66.79,34.3-16.26,49.1-26.88,8-5.72,16.39-11.16,25.52-14.86a70.89,70.89,0,0,1,12.89-3.89c4.51-.9,9.31-.67,13.72-2,9.16-2.81,10-11.62,6.88-19.52a38.47,38.47,0,0,0-14.25-17.49c-13.5-9.36-31-10.19-45.88-3.88a68.1,68.1,0,0,0-21.63,15c-6.31,6.39-10.74,13.83-15.82,21.15-2.13,3.06-4.95,6.92-8.55,8.37-4.67,1.88-8.44-1.43-9.69-5.83-2.74-9.6,6.79-19.1,12.32-25.79,11.28-13.65,24.48-28.07,27.53-46.16.54-3.17,1.8-8.72.07-11.67C712.32,2.24,707,.62,703.49.18c-8.58-1.1-17.16,3.05-23.88,8C663.72,20,651.39,37.36,640.31,53.53c-12,17.56-23.19,35.69-35.42,53.12C578.56,144.16,549,179,521.21,215.41c-5.48,7.19-10.16,15.73-7.23,25,1.75,5.5,10.44,3.15,8.68-2.39-3-9.36,6.66-18.44,12-25.08q9.84-12.31,19.67-24.65C567.22,172,580,155.64,592.47,139s24.62-33.76,36.07-51.23c10.55-16.08,20.64-32.55,32.63-47.62,6.34-8,13.19-15.87,20.94-22.5,6.84-5.83,17.56-12.26,26-6l-2.23-3.89c.27,13.45-6.5,25-14.38,35.4-8.09,10.67-19.37,20.58-24.53,33.11-4.21,10.23-1.42,24.86,10.81,27.84s20.47-9.55,26-18.32C716.91,65,742.55,46.41,767.4,59.68a31.7,31.7,0,0,1,12.17,11C781,73,782.75,76.18,782.84,79c.13,4.29-4,4.12-7.36,4.45-13.45,1.34-25.8,6.18-37.32,13.14C726,104,715.1,113.23,703.72,121.76c-5.62,4.21-11.56,8-18.79,8.23-6.37.19-12.65-1.28-19-1.46-12-.35-22.54,6.37-22.79,19.24-.24,12.23,8.46,23.59,18.94,29.11,12.78,6.73,27.17,4.74,41,5.67,6.29.42,12.94,1.65,18.39,5,6.1,3.74,11.31,11.42,4.38,17C715,213.41,698,212.48,685,210.36c-13.41-2.19-26.52-6.87-37.58-14.89a72,72,0,0,1-13.89-13.73c-4-5-8.33-9.39-14.73-10.86-13.11-3-25,5.22-32.35,15.36-7.95,11-12.82,23.93-20.71,35a84.3,84.3,0,0,1-13.48,15.06,51.78,51.78,0,0,1-7.45,5.37c-2.06,1.22-5.47,3.64-7.86,3.85-5.54.48-12.54-3.78-14.72-8.67C519.85,231.61,512.09,236.19,514.44,241.43Z" fill="#643606"/>
    </g>
  </g>
</svg>
);

export default Antlers;