import { connect } from 'react-redux';

import { selectSkintone } from '../../actions';
import Panel from './component';

const mapStateToProps = ({selectables, peen}) => {
  const selected = Object.keys(selectables).find(item => selectables[item].isSelected);

  return {
    selected,
    items: selectables[selected].items,
    active: peen[selected]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickItem: (id, selected) => {
      switch(selected) {
        case 'skintone':
          dispatch(selectSkintone(id))
      }
    }
  }
}

const PanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);

export default PanelContainer;