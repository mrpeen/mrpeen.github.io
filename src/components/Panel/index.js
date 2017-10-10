import { connect } from 'react-redux';

import {
  selectSkintone,
  selectBlush,
  selectCondom,
  addToy,
  removeToy,
  removeAllToys
} from '../../actions';
import Panel from './component';

const mapStateToProps = ({selectables, peen}) => {
  const selected = selectables.find(item => item.isSelected);
  return {
    selected: selected.name,
    toTakeOff: selected.toTakeOff,
    colorChoiceOnly: selected.colorChoiceOnly,
    items: selected.items,
    active: peen[selected.name]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickColor: (id, selected) => {
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
    },
    onClickToy: (id, active) => {
      if (active.indexOf(id) >= 0) {
        return dispatch(removeToy(id));
      } else {
        return dispatch(addToy(id));
      }
    },
    onClickRemoveToys: () => {
      dispatch(removeAllToys());
    }
  }
}

const PanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);

export default PanelContainer;