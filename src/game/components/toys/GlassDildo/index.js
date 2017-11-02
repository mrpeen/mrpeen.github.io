import { connect } from 'react-redux';

import { findSkintone } from '../../../utils';
import GlassDildo from './component';

const mapStateToProps = (state) => ({
  skintone: findSkintone(state)
})

const GlassDildoContainer = connect(mapStateToProps)(GlassDildo);

export default GlassDildoContainer;