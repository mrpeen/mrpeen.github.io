import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class NavLinkWrapper extends Component {
  render() {
    return (
      <NavLink {...this.props} exact activeClassName="active" />
    );
  }
}

export default NavLinkWrapper;