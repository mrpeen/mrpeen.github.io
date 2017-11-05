import React, { Component } from 'react';

function withSlidingPanel (WrappedComponent) {
  return class withSlidingPanel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isDesktop: props.windowWidth >= 1200,
        items: props.items,
        currentChunk: 0,
        isClearable: props.isClearable
      }
      this.navigate = this.navigate.bind(this)
    }

    componentWillMount() {
      const { isDesktop, items, isClearable } = this.state;

      if (isDesktop) return;

      const numberInRow = this.getItemsInRow();

      this.setState({
        items: items.reduce((acc, value, index) => {
          if (index % (isClearable ? numberInRow -1 : numberInRow) === 0 && index !== 0) acc.push([])
          acc[acc.length - 1].push(value);
          return acc;
        }, [[]])
      });
    }

    getItemsInRow() {
      const { windowWidth } = this.props;
      if (windowWidth < 425) return 3;
      if (windowWidth  >= 425 && windowWidth < 750) return 4;
      return 5;
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
        isDesktop={this.state.isDesktop}
        items={this.state.items} 
        currentChunk={this.state.currentChunk}
        onClickNavArrow={this.navigate} />
    }
  }
}

export default withSlidingPanel;