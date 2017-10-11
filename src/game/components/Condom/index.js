import { connect } from 'react-redux';

import Condom from './component';

const mapStateToProps = (state) => {
  const {peen, selectables} = state;
  const condoms = selectables.find(({name}) => name === 'condom').items;

  return {
    condom: condoms.find(({id}) => peen.condom === id)
  }
}

const CondomContainer = connect(mapStateToProps)(Condom);

export default CondomContainer;