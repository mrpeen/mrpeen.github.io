import React from 'react';

import Circle from '../../Circle';
import PanelItem from '../atoms/PanelItem';
import PanelItemIcon from '../atoms/PanelItemIcon';
import './style.css';

export default class ToysPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTablet: props.windowWidth <= 1200,
      items: props.items,
      currentChunk: 0
    }
  }

  componentWillMount() {
    const { isTablet, items } = this.state;

    if (!isTablet) return;
    this.setState({
      items: items.reduce((acc, value, index) => {
        if (index % 4 === 0 && index !== 0) acc.push([])
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
    const {
      onClickClear,
      onClick,
      active
    } = this.props;

    const { isTablet, currentChunk } = this.state;
    const items = isTablet ? this.state.items[currentChunk] : this.props.items;

    return (
      <div className="ToysPanel">
        {isTablet &&
          <PanelItem type="arrow">
            <div className="ArrowLeft" onClick={() => this.navigate('back')} />
          </PanelItem>}

        {items.map(({id, clears, icon, name}) => 
          <PanelItem key={id}>
            <PanelItemIcon
              key={id}
              onClick={() => onClick(id, active, clears)}
              icon={icon}
              name={name} />
          </PanelItem>)}

        <PanelItem>
          <Circle
            isReset={true}
            onClick={onClickClear} />
        </PanelItem>

        {isTablet &&
          <PanelItem type="arrow">
            <div className="ArrowRight" onClick={() => this.navigate('forward')} />
          </PanelItem>}
      </div>
    )
  }
}