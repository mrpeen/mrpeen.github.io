import React from 'react';

import './style.css';

const UserActions = () => (
  <div className="UserActions">
    <button
      type="button"
      className="UserActions--button">
      Export &#8677;
    </button>
    <button
      type="button"
      className="UserActions--button">
      Reset &#8630;
    </button>
  </div>
);

export default UserActions;