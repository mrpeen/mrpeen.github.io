import { connect } from 'react-redux';

import { findSkintone } from '../../../utils';
import Wand from './component';

const mapStateToProps = (state) => ({
  skintone: findSkintone(state)
})

const WandContainer = connect(mapStateToProps)(Wand);

export default WandContainer;