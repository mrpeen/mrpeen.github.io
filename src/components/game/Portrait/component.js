import React from 'react';

import Condom from '../Condom';
import Karada from '../toys/Karada';
import Wand from '../toys/Wand';
import LatexMask from '../toys/LatexMask';
import EyeMask from '../toys/EyeMask';
import Handcuffs from '../toys/Handcuffs';
import Collar from '../toys/Collar';
import HeartCollar from '../toys/HeartCollar';
import Ballgag from '../toys/Ballgag';
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

      {objToys.ballgag && <Ballgag />}

      {objToys.eyeMask && <EyeMask />}

      {objToys.collar && <Collar />}

      {objToys.wand && <Wand />}

      {objToys.latexMask && <LatexMask />}

      {objToys.heartCollar && <HeartCollar />}

      {objToys.hishiKarada && <Karada />}
    </div>)};

export default Portrait;