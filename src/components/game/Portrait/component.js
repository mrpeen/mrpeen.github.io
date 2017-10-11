import React from 'react';

import MrPeen from '../Peen';
import Condom from '../Condom';
import {
  AnkleCuffs,
  Ballgag,
  Collar,
  EyeMask,
  Handcuffs,
  HeartCollar,
  Karada,
  LatexMask,
  RopeCuffs,
  Wand
} from '../toys';
import './style.css';

const Portrait = ({condom, toys}) => (
  <div
    id="Portrait"
    className="Portrait">

    <MrPeen />

    {condom && <Condom />}

    {toys.handcuffs && <Handcuffs />}

    {toys.ropeCuffs && <RopeCuffs />}

    {toys.ballgag && <Ballgag />}

    {toys.eyeMask && <EyeMask />}

    {toys.collar && <Collar />}

    {toys.wand && <Wand />}

    {toys.latexMask && <LatexMask />}

    {toys.heartCollar && <HeartCollar />}

    {toys.hishiKarada && <Karada />}

    {toys.ankleCuffs && <AnkleCuffs />}

  </div>
);

export default Portrait;