import { connect } from 'react-redux';

import SkintonePanel from './component';
import { selectSkintone } from '../../../actions';
import withWindowResize from '../../../containers/withWindowResize';
import withSlidingPanel from '../../../containers/withSlidingPanel';


const mapStateToProps = ({selectables, peen}) => {
  const skintone = selectables.find(({name}) => name === 'skintone')

  return {
    items: skintone.items,
    active: peen.skintone,
    isClearable: false
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
)(withWindowResize(withSlidingPanel(SkintonePanel)));

export default SkintonePanelContainer;