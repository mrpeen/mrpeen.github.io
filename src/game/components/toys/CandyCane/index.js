import { connect } from 'react-redux';

import { findSkintone } from '../../../utils';
import CandyCane from './component';

const mapStateToProps = (state) => ({
  skintone: findSkintone(state)
})

const CandyCaneContainer = connect(mapStateToProps)(CandyCane);

export default CandyCaneContainer;