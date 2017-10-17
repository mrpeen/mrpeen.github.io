import { connect } from 'react-redux';

import BackgroundPanel from './component';
import { setBackground } from '../../../actions';

const mapStateToProps = ({selectables, peen}) => {
  const backgrounds = selectables.find(({name}) => name === 'background')

  return {
    items: backgrounds.items,
    active: peen.background
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id) => {
      dispatch(setBackground(id));
    }
  }
}

const BackgroundPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundPanel);

export default BackgroundPanelContainer;