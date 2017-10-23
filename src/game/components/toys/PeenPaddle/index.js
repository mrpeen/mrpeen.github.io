import { connect } from 'react-redux';

import { findSkintone } from '../../../utils';
import PeenPaddle from './component';

const mapStateToProps = (state) => ({
  skintone: findSkintone(state)
})

const PeenPaddleContainer = connect(mapStateToProps)(PeenPaddle);

export default PeenPaddleContainer;