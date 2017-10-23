import { connect } from 'react-redux';

import { findSkintone } from '../../../utils';
import Dildo from './component';

const mapStateToProps = (state) => ({
  skintone: findSkintone(state)
})

const DildoContainer = connect(mapStateToProps)(Dildo);

export default DildoContainer;