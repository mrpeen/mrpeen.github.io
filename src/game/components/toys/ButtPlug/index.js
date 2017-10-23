import { connect } from 'react-redux';

import { findSkintone } from '../../../utils';
import ButtPlug from './component';

const mapStateToProps = (state) => ({
  skintone: findSkintone(state)
})

const ButtPlugContainer = connect(mapStateToProps)(ButtPlug);

export default ButtPlugContainer;