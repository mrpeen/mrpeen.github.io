import { connect } from 'react-redux';

import PeenPaddle from './component';

const mapStateToProps = (state) => {
  const {peen, selectables} = state;
  const skintones = selectables.find(({name}) => name === 'skintone').items;

  return {
    skintone: skintones.find(({id}) => peen.skintone === id)
  }
}

const PeenPaddleContainer = connect(mapStateToProps)(PeenPaddle);

export default PeenPaddleContainer;