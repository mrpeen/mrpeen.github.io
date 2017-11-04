import { connect } from 'react-redux';

import MakeUpPanel from './component';
import {
  addMakeUp,
  removeMakeUp,
  removeAllMakeUp,
  clearAndAddMakeUp
} from '../../../actions';
import withWindowResize from '../../../containers/withWindowResize';
import withSlidingPanel from '../../../containers/withSlidingPanel';


const stickyMakeUp = ['blush'];

const mapStateToProps = ({selectables, peen}) => {
  const makeUp = selectables.find(({name}) => name === 'makeUp')

  return {
    items: makeUp.items,
    active: peen.makeUp,
    isClearable: true
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id, active, clearables, type) => {
      if (active.indexOf(id) >= 0 && stickyMakeUp.indexOf(type) === -1) {
        return dispatch(removeMakeUp(id));
      } else {
        if (clearables.length) return dispatch(clearAndAddMakeUp(id, clearables));
        return dispatch(addMakeUp(id));
      }
    },
    onClickClear: () => {
      dispatch(removeAllMakeUp());
    }
  }
}

const MakeUpPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withWindowResize(withSlidingPanel(MakeUpPanel)));

export default MakeUpPanelContainer;