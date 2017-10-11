import { connect } from 'react-redux';

import UserActions from './component';

import { reset } from '../../actions';

const mapDispatchToProps = dispatch => {
  return {
    onClickReset: () => {
      dispatch(reset());
    }
  }
}

const UserActionsContainer = connect(
  null,
  mapDispatchToProps
)(UserActions);

export default UserActionsContainer;