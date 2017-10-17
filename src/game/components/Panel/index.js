import { connect } from 'react-redux';

import Panel from './component';

const mapStateToProps = ({selectables}) => {
  const selected = selectables.find(item => item.isSelected);
  return {
    selected: selected.name
  }
}

const PanelContainer = connect(
  mapStateToProps,
)(Panel);

export default PanelContainer;