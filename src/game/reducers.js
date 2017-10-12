import { combineReducers } from 'redux';

import mrPeenDefault from './static/mrpeendefault';
import {
  ADD_SELECTABLES,
  SELECT_SKINTONE,
  SELECT_CONTROL,
  SELECT_BLUSH,
  SELECT_CONDOM,
  ADD_TOY,
  REMOVE_TOY,
  REMOVE_ALL_TOYS,
  CLEAR_AND_ADD_TOYS,
  SET_BACKGROUND,
  RESET
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

function peen(state = mrPeenDefault, action) {
  switch(action.type) {
    case RESET:
      return {
        ...state,
        ...mrPeenDefault
      }
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
    case ADD_TOY:
      return {
        ...state,
        toys: [
          ...state.toys,
          action.toy
        ]
      }
    case REMOVE_TOY:
      return {
        ...state,
        toys: state.toys.filter(toy => toy !== action.toy)
      }
    case CLEAR_AND_ADD_TOYS:
      return {
        ...state,
        toys: [
          ...state.toys.filter(toy => action.clearables.indexOf(toy) < 0),
          action.newToy
        ]
      }
    case REMOVE_ALL_TOYS:
      return {
        ...state,
        toys: []
      }
    case SET_BACKGROUND:
      return {
        ...state,
        background: action.background
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