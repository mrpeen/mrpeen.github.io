import { connect } from 'react-redux';

import { findSkintone } from '../../../utils';
import MiniPeen from './component';

const mapStateToProps = (state) => ({
  skintone: findSkintone(state)
})

const MiniPeenContainer = connect(mapStateToProps)(MiniPeen);

export default MiniPeenContainer;