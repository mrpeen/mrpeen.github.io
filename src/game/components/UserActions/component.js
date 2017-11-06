import React from 'react';
import FileSaver from 'file-saver';
import html2canvas from 'html2canvas';

import withWindowResize from '../../containers/withWindowResize';
import './style.css';

const onExport = () => {
  html2canvas(document.getElementById('Photo'), {
    onrendered: (canvas) => {
      canvas.toBlob(blob => FileSaver.saveAs(blob, 'mr-peen.png'));
    }
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