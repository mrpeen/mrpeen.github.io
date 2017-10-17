import { connect } from 'react-redux';

import SkintonePanel from './component';
import { selectSkintone } from '../../../actions';

const mapStateToProps = ({selectables, peen}) => {
  const skintone = selectables.find(({name}) => name === 'skintone')

  return {
    items: skintone.items,
    active: peen.skintone
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id) => {
      dispatch(selectSkintone(id));
    }
  }
}

const SkintonePanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SkintonePanel);

export default SkintonePanelContainer;