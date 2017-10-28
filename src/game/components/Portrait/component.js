import React from 'react';

import MrPeen from '../Peen';
import Condom from '../Condom';
import Lashes from '../Lashes';
import Bubble from '../Bubble';
import {
  AnkleCuffs,
  Ballgag,
  ButtPlug,
  Collar,
  Dildo,
  EyeMask,
  Handcuffs,
  HeartCollar,
  Karada,
  LatexMask,
  MiniPeen,
  PeenPaddle,
  RopeCuffs,
  SlutPaddle,
  Wand
} from '../toys';
import './style.css';

const getStyle = (background) => {
  if (!background) return;

  const {image, fill, type} = background;

  if (image) {
    return {
      backgroundImage: `url(${image})`,
      backgroundSize: type === 'cover' && 'cover',
      backgroundRepeat: type === 'cover' && 'no-repeat'
    }
  }

  return {backgroundColor: fill}
}

const Portrait = ({
  condom,
  toys,
  background,
  thoughtBubble,
  skintone,
  blush,
  lashes,
  babyPeen}) => (
  <div className="Portrait">
    <div
      id="Photo"
      className="Photo"
      style={getStyle(background)}>

      <MrPeen
        type="portrait"
        skintone={skintone}
        blush={blush.fill} />

      {lashes && <Lashes />}

      {thoughtBubble && <Bubble />}

      {condom && 
        <Condom
          color={condom.fill}
          type="portrait" />}

      {toys.handcuffs && <Handcuffs />}

      {toys.ropeCuffs && <RopeCuffs />}

      {toys.ballgag && <Ballgag />}

      {toys.eyeMask && <EyeMask />}

      {toys.collar && <Collar />}

      {toys.collarRed &&
        <Collar
          fill="#e51b04"
          stroke="#b71603" />}

      {toys.wand && <Wand />}

      {toys.latexMask && <LatexMask />}

      {toys.latexMaskPink &&
        <LatexMask
          fill="#f4abf3"
          stroke="#ef83ee" />}

      {toys.heartCollar && <HeartCollar />}

      {toys.heartCollarPink &&
        <HeartCollar
          fill="#FFC9EF"
          stroke="#FFABE6"
          metalFill="#FFD700"
          metalStroke="#D4AF37" />}

      {toys.hishiKarada && <Karada />}

      {toys.ankleCuffs && <AnkleCuffs />}

      {toys.miniPeen && <MiniPeen />}

      {toys.slutPaddle && <SlutPaddle />}

      {toys.peenPaddle && <PeenPaddle />}

      {toys.dildo && <Dildo />}

      {toys.buttPlug && <ButtPlug />}

      {babyPeen &&
        <MrPeen type="mini"
          skintone={{fill: babyPeen.fill, stroke: babyPeen.stroke}}
          blush="#ff81d2" />}
    </div>
  </div>
);

export default Portrait;