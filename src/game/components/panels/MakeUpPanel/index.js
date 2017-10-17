import { connect } from 'react-redux';

import MakeUpPanel from './component';
import { selectBlush } from '../../../actions';

const mapStateToProps = ({selectables, peen}) => {
  const makeUp = selectables.find(({name}) => name === 'makeUp')

  return {
    items: makeUp.items,
    active: peen.makeUp
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id) => {
      dispatch(selectBlush(id));
    }
  }
}

const MakeUpPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MakeUpPanel);

export default MakeUpPanelContainer;