import { connect } from 'react-redux';

import Dildo from './component';

const mapStateToProps = (state) => {
  const {peen, selectables} = state;
  const skintones = selectables.find(({name}) => name === 'skintone').items;

  return {
    skintone: skintones.find(({id}) => peen.skintone === id)
  }
}

const DildoContainer = connect(mapStateToProps)(Dildo);

export default DildoContainer;