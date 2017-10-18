import { connect } from 'react-redux';

import SlutPaddle from './component';

const mapStateToProps = (state) => {
  const {peen, selectables} = state;
  const skintones = selectables.find(({name}) => name === 'skintone').items;

  return {
    skintone: skintones.find(({id}) => peen.skintone === id)
  }
}

const SlutPaddleContainer = connect(mapStateToProps)(SlutPaddle);

export default SlutPaddleContainer;