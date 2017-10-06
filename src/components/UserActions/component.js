import React from 'react';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

import './style.css';

const onExport = () => {
  domtoimage.toBlob(document.getElementById('Portrait'))
    .then(function (blob) {
      FileSaver.saveAs(blob, 'mr-peen.png');
    });
}

const UserActions = ({onClickReset}) => (
  <div className="UserActions">
    <button
      type="button"
      className="UserActions--button"
      onClick={onExport}
      >
      Export &#8677;
    </button>
    <button
      type="button"
      className="UserActions--button"
      onClick={onClickReset}>
      Reset &#8630;
    </button>
  </div>
);

export default UserActions;