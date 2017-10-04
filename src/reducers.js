import { combineReducers } from 'redux';

import {
  ADD_SELECTABLES,
  SELECT_SKINTONE,
  SELECT_CONTROL
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
  blush: 1
}, action) {
  console.log(action)
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