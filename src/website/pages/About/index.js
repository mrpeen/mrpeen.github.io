import React from 'react';

import Game from '../../../game';
import Fey from '../../static/fey.jpg';
import './style.css';

const About = () => (
  <div className="About">
    <div className="About--text">
      <div className="MrPeenSocial">
        <a 
          className="MrPeenSocialIcon"
          target="_blank"
          href="https://www.etsy.com/shop/MrHumphreyPeen">
          <i className="fa fa-etsy" aria-hidden="true"></i>
        </a>
        <a 
          target="_blank"
          className="MrPeenSocialIcon"
          href="https://www.instagram.com/mrhpeen/">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a
          className="MrPeenSocialIcon"
          target="_blank"
          href="https://www.facebook.com/MrHPeen">
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
        </a>
        <a
          className="MrPeenSocialIcon"
          target="_blank"
          href="https://github.com/mrpeen">
          <i className="fa fa-github" aria-hidden="true" />
        </a>
        <a 
          className="MrPeenSocialIcon"
          href="mailto:mrhpeen@gmail.com">
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>
      </div>
      <div>
        Mr Peen was conceived with lots of luv to spread safe kawaii kinky sex around the world!<br /><br />

        You can visit them on <a target="_blank" href="https://www.etsy.com/shop/MrHumphreyPeen">their Etsy Store</a> or drop them
        an <a href="mailto:mrhpeen@gmail.com">email</a> (remember not to be rude!).

        You can also show your appreciation and share your favourite runway looks on <a target="_blank" href="https://www.facebook.com/MrHPeen/">Facebook</a>.<br /><br />

        These human beings are happy to serve Mr Peen as their personal styling assistants:<br /><br />

        <div className="TeamMember">
          <span
            style={{backgroundImage: `url(${Fey})`}}
            className="TeamMember--pic" />
          <span className="TeamMember--description">
            <b>Fey</b> likes to code funny things but dislikes most food. She wears anything that's weird enough and has always wanted to make a dress up game.
            She created a fictional clothing style called oyasumi-kei. She is very happy she crossed paths with Mr Peen!<br />
            <a 
              className="SocialIcon"
              target="_blank"
              href="https://feychou.github.io">
              <i className="fa fa-globe" aria-hidden="true"></i>
            </a>
            <a
              className="SocialIcon"
              target="_blank"
              href="https://github.com/feychou">
              <i className="fa fa-github" aria-hidden="true" />
            </a>
            <a
              className="SocialIcon"
              target="_blank"
              href="https://www.facebook.com/federica.recanatini">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a 
              className="SocialIcon"
              href="mailto:federica.recanatini@gmail.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </span>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default About;