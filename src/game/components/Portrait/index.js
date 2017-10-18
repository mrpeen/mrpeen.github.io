import { connect } from 'react-redux';

import Portrait from './component';

const mapStateToProps = (state) => {
  const {selectables, peen} = state;
  const {extras, toys, background} = peen;
  const backgroundsList = selectables.find(({name}) => name === 'background').items;
  const toysList = selectables.find(({name}) => name === 'toys').items;
  const extrasList = selectables.find(({name}) => name === 'extras').items;
  const selectedToys = toysList.filter(({id}) => toys.indexOf(id) >= 0) || [];

  return {
    condom: extrasList.find(({id}) => extras === id),
    toys: selectedToys.reduce((acc, item, index) => {
      acc[item.name] = item;
      return acc;
    }, {}),
    background: backgroundsList.find(({id}) => id === background)
  }
}

const PortraitContainer = connect(mapStateToProps)(Portrait);

export default PortraitContainer;