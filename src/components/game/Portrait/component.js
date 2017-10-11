import React from 'react';

import MrPeen from '../Peen';
import Condom from '../Condom';
import {
  Ballgag,
  Collar,
  EyeMask,
  Handcuffs,
  HeartCollar,
  Karada,
  LatexMask,
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

    {toys.ballgag && <Ballgag />}

    {toys.eyeMask && <EyeMask />}

    {toys.collar && <Collar />}

    {toys.wand && <Wand />}

    {toys.latexMask && <LatexMask />}

    {toys.heartCollar && <HeartCollar />}

    {toys.hishiKarada && <Karada />}
  </div>
);

export default Portrait;