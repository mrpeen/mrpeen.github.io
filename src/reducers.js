import { combineReducers } from 'redux';

import {
  ADD_SELECTABLES,
  SELECT_SKINTONE
} from './actions';

function selectables(state = {}, action) {
  switch(action.type) {
    case ADD_SELECTABLES:
      return {
        ...state,
        skintones: action.selectables.skintones
      }
    default:
      return state
  }
}

function peen(state = {
  skintone: 1
}, action) {
  switch(action.type) {
    case SELECT_SKINTONE:
      return {
        ...state,
        skintone: action.skintone
      }
    default:
      return state
  }
}


const dressUpApp = combineReducers({
  selectables,
  peen
});

export default dressUpApp;