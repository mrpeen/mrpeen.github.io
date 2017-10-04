import { combineReducers } from 'redux';

import {
  ADD_SELECTABLES,
  SELECT_SKINTONE,
  SELECT_CONTROL,
  SELECT_BLUSH,
  SELECT_CONDOM
} from './actions';

function selectables(state = [], action) {
  switch(action.type) {
    case ADD_SELECTABLES:
      return [
        ...state,
        ...action.selectables
      ]
    case SELECT_CONTROL:
      return state.map(item => {
        item.isSelected = false;
        if (item.id === action.control) item.isSelected = true;
        return item;
      })
    default:
      return state
  }
}

function peen(state = {
  skintone: 1,
  blush: 1,
  condom: null
}, action) {
  switch(action.type) {
    case SELECT_SKINTONE:
      return {
        ...state,
        skintone: action.skintone
      }
    case SELECT_BLUSH:
      return {
        ...state,
        blush: action.blush
      }
    case SELECT_CONDOM:
      return {
        ...state,
        condom: action.condom
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