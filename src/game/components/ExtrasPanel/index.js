import { connect } from 'react-redux';

import ExtrasPanel from './component';
import { selectCondom } from '../../actions';

const mapStateToProps = ({selectables, peen}) => {
  const extras = selectables.find(({name}) => name === 'extras')

  return {
    items: extras.items,
    active: peen.extras
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id) => {
      dispatch(selectCondom(id));
    }
  }
}

const ExtrasPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExtrasPanel);

export default ExtrasPanelContainer;