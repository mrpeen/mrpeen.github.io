import { connect } from 'react-redux';

import MiniPeen from './component';

const mapStateToProps = (state) => {
  const {peen, selectables} = state;
  const skintones = selectables.find(({name}) => name === 'skintone').items;

  return {
    skintone: skintones.find(({id}) => peen.skintone === id)
  }
}

const MiniPeenContainer = connect(mapStateToProps)(MiniPeen);

export default MiniPeenContainer;