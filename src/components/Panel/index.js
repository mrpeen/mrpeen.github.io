import { connect } from 'react-redux';

import {
  selectSkintone,
  selectBlush,
  selectCondom
} from '../../actions';
import Panel from './component';

const mapStateToProps = ({selectables, peen}) => {
  const selected = selectables.find(item => item.isSelected);

  return {
    selected: selected.name,
    items: selected.items,
    active: peen[selected.name]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickItem: (id, selected) => {
      switch(selected) {
        case 'blush':
          return dispatch(selectBlush(id));
        case 'skintone':
          return dispatch(selectSkintone(id));
        case 'condom':
          return dispatch(selectCondom(id));        
        default:
          return;
      }
    }
  }
}

const PanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);

export default PanelContainer;