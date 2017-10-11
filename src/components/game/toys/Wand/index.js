import { connect } from 'react-redux';

import Wand from './component';

const mapStateToProps = (state) => {
  const {peen, selectables} = state;
  const skintones = selectables.find(({name}) => name === 'skintone').items;

  return {
    skintone: skintones.find(({id}) => peen.skintone === id)
  }
}

const WandContainer = connect(mapStateToProps)(Wand);

export default WandContainer;