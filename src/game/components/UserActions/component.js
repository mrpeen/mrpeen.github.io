import React from 'react';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

import withWindowResize from '../../containers/withWindowResize';
import './style.css';

const onExport = () => {
  domtoimage.toBlob(document.getElementById('Photo'))
    .then(blob => {
      FileSaver.saveAs(blob, 'mr-peen.png');
    });
}

const UserActions = ({onClickReset, windowWidth}) => (
  <div className="UserActions">
    <button
      type="button"
      className="UserActions--button"
      onClick={onExport}>
      {windowWidth >= 750 ? 'Download ⭳' : '⭳'}
    </button>
    <button
      type="button"
      className="UserActions--button"
      onClick={onClickReset}>
      {windowWidth >= 750 ? 'Reset ↶' : '↶'}
    </button>
  </div>
);

export default withWindowResize(UserActions);