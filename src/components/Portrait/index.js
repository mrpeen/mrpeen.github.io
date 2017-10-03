import { connect } from 'react-redux';

import Portrait from './component';

const mapStateToProps = (state) => {
  const {selectables, peen} = state;
  const {skintone} = peen;
  const skintones = selectables.find(({name}) => name === 'skintone').items
 
  return {
    skintone: skintones.find(({id}) => (id === skintone))
  }
}

const PortraitContainer = connect(mapStateToProps)(Portrait);

export default PortraitContainer;