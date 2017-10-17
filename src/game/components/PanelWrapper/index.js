import { connect } from 'react-redux';

import PanelWrapper from './component';

const mapStateToProps = ({selectables}) => {
  const selected = selectables.find(item => item.isSelected);
  return {
    selected: selected.name
  }
}

const PanelWrapperContainer = connect(
  mapStateToProps,
)(PanelWrapper);

export default PanelWrapperContainer;