import React from 'react';

import './style.css';

export default class Bubble extends React.Component {
  constructor(props) {
    super(props);
    this.onClickBubble = this.onClickBubble.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  componentDidMount() {
    this.focusTextInput();
  }

  onClickBubble() {
    this.focusTextInput();
  }

  focusTextInput() {
    this.textInput.focus();
  }

  render() {
    return (
      <div
        className="Bubble"
        onClick={this.onClickBubble}>
        <input
          ref={(input) => { this.textInput = input; }}
          type="text"
          maxlength={15} />
      </div>
    );
  }
}