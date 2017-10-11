import React from 'react';

import MrPeen from '../Peen';
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