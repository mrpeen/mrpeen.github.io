import { connect } from 'react-redux';

import Portrait from './component';

const mapStateToProps = (state, ownProps) => {
  const {selectables, peen} = state;
  const {skintone} = peen;
  return {
    skintone: selectables.skintones.items.find(({id}) => (id === skintone))
  }
}

const PortraitContainer = connect(mapStateToProps)(Portrait);

export default PortraitContainer;