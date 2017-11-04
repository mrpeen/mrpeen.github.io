import React, { Component } from 'react';

function withSlidingPanel (WrappedComponent) {
  return class withSlidingPanel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isTablet: props.windowWidth <= 1200,
        items: props.items,
        currentChunk: 0,
        isClearable: props.isClearable
      }
      this.navigate = this.navigate.bind(this)
    }

    componentWillMount() {
      const { isTablet, items, isClearable } = this.state;
      const numberInRow = isClearable ? 4 : 5;

      if (!isTablet) return;
      this.setState({
        items: items.reduce((acc, value, index) => {
          if (index % numberInRow === 0 && index !== 0) acc.push([])
          acc[acc.length - 1].push(value);
          return acc;
        }, [[]])
      });
    }

    navigate(direction) {
      const { currentChunk, items } = this.state;
      const chunkNumber = items.length - 1;

      if (direction === 'back') {
        if (currentChunk === 0) {
          this.setState({
            currentChunk: chunkNumber
          })
        } else {
          this.setState({
            currentChunk: currentChunk - 1
          })
        }
      } else {
        if (currentChunk === chunkNumber) {
          this.setState({
            currentChunk: 0
          })
        } else {
          this.setState({
            currentChunk: currentChunk + 1
          })
        }
      }
    }

    render() {
      return <WrappedComponent
        {...this.props}
        {...this.state}
        isTablet={this.state.isTablet}
        items={this.state.items} 
        currentChunk={this.state.currentChunk}
        onClickNavArrow={this.navigate} />
    }
  }
}

export default withSlidingPanel;