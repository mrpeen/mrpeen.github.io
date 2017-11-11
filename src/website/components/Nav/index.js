import React from 'react';

import NavLink from '../NavLink';
import './style.css';

const Nav = () => (
  <div className="Website--Nav">
    <span className="Website--NavItem">
      <NavLink to="/">Home</NavLink>
    </span>&nbsp;&nbsp;&nbsp;
    <span className="Website--NavItem">
      <a
        target="_blank"
        href="https://www.etsy.com/shop/MrHumphreyPeen">
        Shop
      </a>
    </span>&nbsp;&nbsp;&nbsp;
    <span className="Website--NavItem">
      <NavLink to="/about">About</NavLink>
    </span>  
  </div>
);

export default Nav;