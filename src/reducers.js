import { combineReducers } from 'redux';

import {
  ADD_SKINTONES,
  SELECT_SKINTONE
} from './actions';

function skintones(state = [], action) {
  switch(action.type) {
    case ADD_SKINTONES:
      return [
        ...state,
        action.skintones
      ]
    default:
      return state
  }
}

function peen(state= {
  skintone: 1
}, action) {
  switch(action.type) {
    case SELECT_SKINTONE:
      return {
        ...state,
        skitone: action.skintone
      }
    default:
      return state
  }
}


const dressUpApp = combineReducers({
  skintones,
  peen
});

export default dressUpApp;