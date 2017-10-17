import { connect } from 'react-redux';

import ToysPanel from './component';
import {
  addToy,
  removeToy,
  clearAndAddToys,
  removeAllToys
} from '../../actions';

const mapStateToProps = ({selectables, peen}) => {
  const toys = selectables.find(({name}) => name === 'toys')

  return {
    items: toys.items,
    active: peen.toys
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id, active, clears) => {
      if (active.indexOf(id) >= 0) {
        return dispatch(removeToy(id));
      } else {
        if (clears.length) return dispatch(clearAndAddToys(id, clears));
        return dispatch(addToy(id));
      }
    },
    onClickClear: () => {
      dispatch(removeAllToys());
    }
  }
}

const ToysPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToysPanel);

export default ToysPanelContainer;