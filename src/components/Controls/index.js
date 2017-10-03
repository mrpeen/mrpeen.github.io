import { connect } from 'react-redux';

import Controls from './component';

const mapStateToProps = ({selectables}) => ({
  selectables
})

const mapDispatchToProps = dispatch => {

}

const ControlsContainer = connect(
  mapStateToProps
)(Controls);

export default ControlsContainer;