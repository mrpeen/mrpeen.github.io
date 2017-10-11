import { connect } from 'react-redux';

import Portrait from './component';

const mapStateToProps = (state) => {
  const {selectables, peen} = state;
  const {condom, toys} = peen;
  const toysList = selectables.find(({name}) => name === 'toys').items
  const selectedToys = toysList.filter(({id}) => toys.indexOf(id) >= 0) || [];

  return {
    condom: condom,
    toys: selectedToys.reduce((acc, item, index) => {
      acc[item.name] = item;
      return acc;
    }, {})
  }
}

const PortraitContainer = connect(mapStateToProps)(Portrait);

export default PortraitContainer;