import { connect } from 'react-redux';

import { selectSkintone } from '../../actions';
import Panel from './component';

const mapStateToProps = ({selectables, peen}) => {
  const selected = selectables.find(item => item.isSelected);

  return {
    selected: selected.name,
    items: selected.items,
    active: peen[selected.name]
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