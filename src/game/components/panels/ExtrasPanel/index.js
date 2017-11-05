import { connect } from 'react-redux';

import ExtrasPanel from './component';
import {
  addExtra,
  removeExtra,
  clearAndAddExtras,
  removeAllExtras
} from '../../../actions';
import withWindowResize from '../../../containers/withWindowResize';
import withSlidingPanel from '../../../containers/withSlidingPanel';


const mapStateToProps = ({selectables, peen}) => {
  const extras = selectables.find(({name}) => name === 'extras')

  return {
    items: extras.items,
    active: peen.extras,
    isClearable: true
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id, active, clears) => {
      if (active.indexOf(id) >= 0) {
        return dispatch(removeExtra(id));
      } else {
        if (clears.length) return dispatch(clearAndAddExtras(id, clears));
        return dispatch(addExtra(id));
      }
    },
    onClickClear: () => {
      dispatch(removeAllExtras());
    }
  }
}

const ExtrasPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withWindowResize(withSlidingPanel(ExtrasPanel)));

export default ExtrasPanelContainer;