import { connect } from 'react-redux';

import Portrait from './component';

const mapStateToProps = (state) => {
  const {selectables, peen} = state;
  const {extras, toys, background, makeUp, skintone} = peen;

  const objSelectables = selectables.reduce((acc, item, index) => {
    acc[item.name] = item.items;
    return acc;
  }, {})

  const selectedToys = objSelectables.toys.filter(({id}) => toys.indexOf(id) >= 0) || [];

  return {
    background: objSelectables.background.find(({id}) => id === background),
    skintone: objSelectables.skintone.find(({id}) => skintone === id),
    blush: objSelectables.makeUp.find(({id, type}) => makeUp.indexOf(id) > -1 && type === 'blush'),
    lashes: objSelectables.makeUp.find(({id, type}) => makeUp.indexOf(id) > -1 && type === 'lashes'), 
    eyeshadow: objSelectables.makeUp.find(({id, type}) => makeUp.indexOf(id) > -1 && type === 'eyeshadow'),
    condom: objSelectables.extras.find(({id, type}) => extras.indexOf(id) > -1 && type === 'condom'),
    babyPeen: objSelectables.extras.find(({id, type}) => extras.indexOf(id) > -1 && type === 'peen'),
    antlers: objSelectables.extras.find(({id, type}) => extras.indexOf(id) > -1 && type === 'antlers'),
    christmasHat: objSelectables.extras.find(({id, type}) => extras.indexOf(id) > -1 && type === 'christmasHat'),
    miniChristmasHat: objSelectables.extras.find(({id, type}) => extras.indexOf(id) > -1 && type === 'miniChristmasHat'),
    thoughtBubble: objSelectables.extras.find(({id, type}) => extras.indexOf(id) > -1 && type === 'thoughtBubble'),
    toys: selectedToys.reduce((acc, item, index) => {
      acc[item.name] = item;
      return acc;
    }, {}),  
  }
}

const PortraitContainer = connect(mapStateToProps)(Portrait);

export default PortraitContainer;