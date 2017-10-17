import { connect } from 'react-redux';

import Condom from './component';

const mapStateToProps = (state) => {
  const {peen, selectables} = state;
  const extras = selectables.find(({name}) => name === 'extras').items;
  return {
    condom: extras.find(({id}) => peen.extras === id)
  }
}

const CondomContainer = connect(mapStateToProps)(Condom);

export default CondomContainer;