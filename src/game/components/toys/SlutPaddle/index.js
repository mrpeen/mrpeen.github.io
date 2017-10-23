import { connect } from 'react-redux';

import { findSkintone } from '../../../utils';
import SlutPaddle from './component';

const mapStateToProps = (state) => ({
  skintone: findSkintone(state)
})

const SlutPaddleContainer = connect(mapStateToProps)(SlutPaddle);

export default SlutPaddleContainer;