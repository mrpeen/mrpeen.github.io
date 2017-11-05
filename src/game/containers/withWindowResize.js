import React, { Component } from 'react';

function withWindowResize (WrappedComponent) {
  return class WithWindowResize extends Component {
    constructor(props) {
      super(props)
      this.state = {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      }
      this.updateDimensions = this.updateDimensions.bind(this)
    }

    componentWillMount() {
      this.updateDimensions()
    }

    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      })
    }

    render() {
      return <WrappedComponent
        {...this.props}
        {...this.state} />
    }
  }
}

export default withWindowResize;