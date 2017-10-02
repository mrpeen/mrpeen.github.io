import { connect } from 'react-redux';

import Panel from './component';

const mapStateToProps = ({selectables, peen}) => {
  const selected = Object.keys(selectables).find(item => selectables[item].selected);

  return {
    selected,
    items: selectables[selected].items,
    active: peen[selected]
  }
}

const PanelContainer = connect(mapStateToProps)(Panel);

export default PanelContainer;