import React from 'react';

import Condom from '../Condom';
import Karada from '../toys/Karada';
import Wand from '../toys/Wand';
import LatexMask from '../toys/LatexMask';
import EyeMask from '../toys/EyeMask';
import Handcuffs from '../toys/Handcuffs';
import './style.css';

const Portrait = ({skintone, blush, condom, toys}) => {
  const objToys = toys.reduce((acc, item, index) => {
    acc[item.name] = item;
    return acc;
  }, {})

  return(
    <div
      id="Portrait"
      className="Portrait">
      <svg className="MrPeen" id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 627.5 790.5'>
        <g id='Ebene_2'>
          <g id='Mr_Peen' fill={skintone.fill} stroke={skintone.stroke} strokeWidth='8' strokeLinecap='round'
          strokeLinejoin='round' strokeMiterlimit='10'>
            <path d='M538.569,758.312c-13.115,20.719-74.588,44.193-98.062,2.755c-16.575-91.163,89.091-109.81,102.89-73.199 C551.464,715.865,549.854,739.347,538.569,758.312z' />
            <path d='M226.398,765.189c-45.582,37.979-154.376,21.278-109.105-55.257C149.055,670.566,226.398,686.458,226.398,765.189z' />
            <path d='M558.957,617.029c-0.258,8.317-0.95,16.616-2.072,24.862c-1.814,15.987-6.377,31.542-13.488,45.976 c-13.799-36.61-119.465-17.964-102.89,73.199c-35.719,1.637-73.966-3.708-113.954-13.819 c-32.296,10.972-66.058,17.027-100.155,17.964c0-78.732-77.343-94.623-109.105-55.258c-7.266-11.894-13.431-24.425-18.419-37.439 c-3.253-8.439-5.972-17.076-8.143-25.856c-5.334-20.81-7.1-42.373-5.221-63.772l17.984-156.221l0.912-1.72 c63.441,10.732,160.758-36.092,191.235-105.19c31.762,65.43,155.081,96.798,223.267,72.516l0.477,0.643 C544.122,479,560.801,557.068,558.957,617.029z' />
            <path d='M518.907,392.354c-68.186,24.179-191.505-7.189-223.267-72.516c-30.478,69.098-127.794,116.026-191.235,105.19 c-41.562-7.128-68.6-38.89-52.729-105.293C94.336,148.782,153.198,15.539,269.224,15.166 c105.667-41.438,236.195,82.876,294.208,304.568C570.663,357.566,550.814,381.062,518.907,392.354z' />
            <path d='M231.992,487.784c3.321,4.954,5.669,10.495,6.92,16.327c5.926,27.618-13.861,55.257-44.172,61.763 c-30.312,6.506-59.712-10.608-65.638-38.227c-1.252-5.826-1.386-11.838-0.394-17.714' />
            <path d='M498.229,503.199c-0.233,5.956-1.598,11.812-4.02,17.259c-11.478,25.795-43.737,36.486-72.081,23.868 c-28.343-12.617-41.997-43.737-30.519-69.532c2.43-5.432,5.867-10.354,10.132-14.503' />
          </g>
        </g>
        <path fill='none' stroke='#000' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' d='M291.518,252.916c0,0.518,0.145,1.057,0.166,1.575c0.995,13.695-11.499,25.774-27.887,26.935 c-16.389,1.16-30.478-8.992-31.452-22.688c0-0.518,0-1.057,0-1.575' />
        <path fill='none' stroke='#000' strokeWidth='5' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' d='M291.58,252.895c0.995,13.695,15.063,23.868,31.452,22.688c16.389-1.181,28.882-13.26,27.888-26.935' />
        <ellipse fill={blush.fill} cx='142.59' cy='248.626' rx='44.297' ry='15.291' />
        <ellipse fill={blush.fill} cx='442.89' cy='229.461' rx='44.297' ry='15.291' />
        <circle cx='145.263' cy='203.542' r='17.611' />
        <circle fill='#FFF' cx='149.717' cy='194.385' r='3.502' />
        <circle fill='#FFF' cx='155.498' cy='200.165' r='2.3' />
        <circle cx='442.89' cy='185.931' r='17.611' />
        <circle fill='#FFF' cx='447.323' cy='176.773' r='3.501' />
        <circle fill='#FFF' cx='453.125' cy='182.554' r='2.3' />
      </svg>

      {condom && <Condom />}

      {objToys.handcuffs && <Handcuffs />}

      {objToys.ballgag &&
        <svg className="Ballgag" xmlns='http://www.w3.org/2000/svg' viewBox='0 -300.375 1169.547 1092.375'>
          <g id='Gag'>
            <path fill='none' stroke='#A7A5A6' strokeWidth='5' strokeMiterlimit='10' d='M239.512,265.793l0.702,12.26 c0.641,11.202-7.914,20.796-19.116,21.438l-8.216,0.47l-3.024-52.813l8.217-0.471C229.276,246.036,238.871,254.591,239.512,265.793 z' />
            <path fill='none' stroke='#A7A5A6' strokeWidth='5' strokeMiterlimit='10' d='M345.592,259.718l0.702,12.26 c0.641,11.202,10.236,19.757,21.438,19.116l8.216-0.471l-3.024-52.813l-8.216,0.47 C353.506,238.921,344.951,248.516,345.592,259.718z' />
            <path fill='gray' stroke='#000' strokeWidth='3' strokeMiterlimit='10' d='M219.39,293.97L51,303.33 c0.227-0.85,0.453-1.69,0.68-2.53c1.792-6.66,3.604-13.26,5.458-19.78c1.926-6.78,3.882-13.48,5.88-20.1l153.922-8.56 L219.39,293.97z' />
            <path fill='gray' stroke='#000' strokeWidth='3' strokeMiterlimit='10' d='M555,275.01L369.041,285.4l-2.451-41.61 l173.388-9.68c1.077,2.69,2.153,5.39,3.209,8.12c2.399,6.16,4.727,12.43,6.993,18.8C551.821,265.64,553.421,270.3,555,275.01z' />
            <rect x='232.237' y='257.44' transform='rotate(-3.279 292.208 268.743)' fill='gray' stroke='#000' strokeWidth='3' strokeMiterlimit='10' width='120.333' height='22.947' />
            <g fill='none' stroke='#000' strokeWidth='2' strokeMiterlimit='10'>
              <line x1='232.001' y1='264.503' x2='234.496' y2='264.351' />
              <line strokeDasharray='5.012,5.012' x1='239.499' y1='264.048' x2='347.06' y2='257.519' />
              <line x1='349.561' y1='257.367' x2='352.057' y2='257.215' />
            </g>
            <g fill='none' stroke='#000' strokeWidth='2' strokeMiterlimit='10'>
              <line x1='232.001' y1='280.489' x2='234.496' y2='280.337' />
              <line strokeDasharray='5.012,5.012' x1='239.499' y1='280.034' x2='347.06' y2='273.505' />
              <line x1='349.561' y1='273.353' x2='352.057' y2='273.201' />
            </g>
            <ellipse transform='rotate(-3.279 291.548 268.785)' fill='#FF3939' stroke='#F00' strokeWidth='5' strokeMiterlimit='10' cx='291.737' cy='268.951' rx='27.985' ry='27.985' />
            <ellipse transform='rotate(-3.279 192.924 274.408)' fill='#DBDADA' cx='193.067' cy='274.601' rx='6.895' ry='6.895' />
            <ellipse transform='rotate(-3.279 388.514 263.248)' fill='#DBDADA' cx='388.746' cy='263.397' rx='6.895' ry='6.895' />
            <ellipse transform='rotate(-3.279 334.283 266.321)' fill='#DBDADA' cx='334.524' cy='266.503' rx='3.709' ry='3.709' />
            <ellipse transform='rotate(-3.279 247.732 271.34)' fill='#DBDADA' cx='247.852' cy='271.465' rx='3.709' ry='3.709' />
            <line fill='none' stroke='#000' strokeWidth='3' strokeMiterlimit='10' x1='65.705' y1='267.215' x2='65.705' y2='267.215' />
            <g fill='none' stroke='#000' strokeWidth='2' strokeMiterlimit='10'>
              <line x1='61.702' y1='265.31' x2='65.197' y2='265.129' />
              <line strokeDasharray='7.0826,7.0826' x1='72.27' y1='264.763' x2='210.195' y2='257.616' />
              <line x1='213.732' y1='257.432' x2='217.227' y2='257.251' />
            </g>
            <g fill='none' stroke='#000' strokeWidth='2' strokeMiterlimit='10'>
              <line x1='52.217' y1='298.809' x2='55.712' y2='298.619' />
              <line strokeDasharray='6.9639,6.9639' x1='62.665' y1='298.242' x2='212.17' y2='290.134' />
              <line x1='215.647' y1='289.946' x2='219.142' y2='289.756' />
            </g>
            <line fill='none' stroke='#000' strokeWidth='2' strokeMiterlimit='10' strokeDasharray='7' x1='366.876' y1='248.648' x2='542.035' y2='239.282' />
            <line fill='none' stroke='#000' strokeWidth='2' strokeMiterlimit='10' strokeDasharray='7' x1='368.812' y1='281.515' x2='553.405' y2='270.292' />
          </g>
        </svg>}

      {objToys.eyeMask && <EyeMask />}

      {objToys.collar && 
        <svg className="Collar" xmlns='http://www.w3.org/2000/svg' viewBox='0 -300.375 1169.547 1092.375'>
          <g id='Collar' strokeMiterlimit='10'>
            <path fill='#333' stroke='#231F20' strokeWidth='3' d='M540.5,455.64l-127.28,8.9h-0.01l-14.469,1.01 L92.5,486.94l6.46-55.08l427.03-29.85C531.258,420.31,536.129,438.22,540.5,455.64z' />
            <line fill='none' stroke='#231F20' strokeWidth='3' strokeDasharray='10' x1='98.282' y1='437.645' x2='527.688' y2='407.946' />
            <line fill='none' stroke='#231F20' strokeWidth='3' strokeDasharray='10' x1='92.5' y1='482.5' x2='539.186' y2='450.453' />
            <circle display='none' fill='none' stroke='#7B7979' strokeWidth='9' cx='322.891' cy='482.086' r='30.414' />
            <path fill='#BFBFBF' stroke='#7B7979' strokeWidth='2' d='M310.141,437.735 c-19.231,1.369-33.722,18.071-32.351,37.312c1.37,19.231,18.081,33.721,37.312,32.351c19.241-1.37,33.721-18.081,32.351-37.312 C346.083,450.845,329.382,436.365,310.141,437.735z M314.474,498.581c-14.364,1.023-26.844-9.798-27.867-24.161 c-1.024-14.374,9.798-26.844,24.162-27.867c14.364-1.023,26.843,9.788,27.867,24.162 C339.658,485.078,328.837,497.558,314.474,498.581z' />
            <ellipse transform='rotate(-4.052 310.92 444.486)' fill='#BFBFBF' stroke='#7B7979' strokeWidth='2' cx='310.615' cy='444.383' rx='15.342' ry='15.342' />
          </g>
        </svg>}

      {objToys.wand && <Wand />}

      {objToys.latexMask && <LatexMask />}

      {objToys.heartCollar &&
        <svg className="HeartCollar" xmlns='http://www.w3.org/2000/svg' viewBox='0 -300.375 1169.547 1092.375'>
          <g id='Heart_Collar'>
            <path fill='#969292' stroke='#666' strokeWidth='2' strokeMiterlimit='10' d='M356.601,393.575 c-13.335-6.042-30.902,1.087-44.513,16.407c-15.875-12.958-34.353-17.201-46.548-9.114c-30.975,22.034-18.373,77.018,2.544,83.967 l51.885,23.56l47.474-31.518C386.998,466.687,390.679,410.399,356.601,393.575z M359.18,473.676l-39.871,26.465l-43.566-19.782 c-17.572-5.839-28.144-52.007-2.137-70.505c10.24-6.788,25.761-3.233,39.085,7.653c11.43-12.869,26.179-18.848,37.377-13.777 C378.688,417.852,375.59,465.115,359.18,473.676z' />
            <polygon fill='#7ACED6' stroke='#12AEBC' strokeWidth='3' strokeMiterlimit='10' points='271.33,469.67 271.66,474.43 92.5,486.94 93.03,482.46 98.28,437.64 98.96,431.86 267.9,420.05 268.3,425.88' />
            <path fill='#7ACED6' stroke='#12AEBC' strokeWidth='3' strokeMiterlimit='10' d='M540.5,455.64l-127.28,8.9h-0.01l-14.47,1.01 l-36.77,2.57l-0.34-4.93l-3.01-43.55l-0.41-5.9l167.78-11.73c0.57,1.98,1.14,3.96,1.7,5.94c4.11,14.44,7.96,28.62,11.5,42.5 C539.63,452.18,540.07,453.91,540.5,455.64z' />
            <line fill='none' stroke='#12AEBC' strokeWidth='3' strokeMiterlimit='10' strokeDasharray='10' x1='527.69' y1='407.95' x2='358.62' y2='419.64' />
            <line fill='none' stroke='#12AEBC' strokeWidth='3' strokeMiterlimit='10' strokeDasharray='10' x1='268.3' y1='425.88' x2='98.28' y2='437.64' />
            <line fill='none' stroke='#12AEBC' strokeWidth='3' strokeMiterlimit='10' strokeDasharray='10' x1='539.19' y1='450.45' x2='361.63' y2='463.19' />
            <polyline fill='none' stroke='#12AEBC' strokeWidth='3' strokeMiterlimit='10' strokeDasharray='10' points='271.33,469.67 93.03,482.46 92.5,482.5' />
            <ellipse transform='rotate(-3.279 398.792 437.39)' fill='#DBDADA' cx='399.033' cy='437.64' rx='6.895' ry='6.895' />
            <ellipse transform='rotate(-3.279 229.891 450.774)' fill='#DBDADA' cx='230.033' cy='451.036' rx='6.895' ry='6.895' />
          </g>
        </svg>}

      {objToys.hishiKarada && <Karada />}
    </div>)};

export default Portrait;