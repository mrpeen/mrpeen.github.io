import { connect } from 'react-redux';

import Controls from './component';
import { selectControl } from '../../actions';

const mapStateToProps = ({selectables}) => ({
  selectables
})

const mapDispatchToProps = dispatch => {
  return {
    onClickItem: (id) => {
      dispatch(selectControl(id))
    }
  }
}

const ControlsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);

export default ControlsContainer;