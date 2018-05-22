import { combineReducers } from 'redux';

import selectableItems from './static/selectables';
import {
  SELECT_SKINTONE,
  SELECT_CONTROL,
  ADD_TOY,
  REMOVE_TOY,
  REMOVE_ALL_TOYS,
  CLEAR_AND_ADD_TOYS,
  ADD_EXTRA,
  REMOVE_EXTRA,
  REMOVE_ALL_EXTRAS,
  CLEAR_AND_ADD_EXTRAS,
  ADD_MAKE_UP,
  REMOVE_MAKE_UP,
  REMOVE_ALL_MAKE_UP,
  CLEAR_AND_ADD_MAKE_UP,
  SET_BACKGROUND,
  RESET
} from './actions';

const mrPeenDefault = {
  skintone: 1,
  makeUp: [1],
  extras: [],
  toys: [],
  background: null
};

const addItem = (state, id, type) => ({
  ...state,
  [type]: [
    ...state[type],
    id
  ]
});

const removeItem = (state, id, type) => ({
  ...state,
  [type]: state[type].filter(item => item !== id)
});

const clearAndAddItems = (state, id, type, clearables) => ({
  ...state,
  [type]: [
    ...state[type].filter(item => clearables.indexOf(item) < 0),
    id
  ]
});

const removeAllItems = (state, type, initial) => ({
  ...state,
  [type]: initial
});

function selectables(state = selectableItems, action) {
  switch(action.type) {
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
    case SELECT_SKINTONE:
      return {
        ...state,
        skintone: action.skintone
      }
    case SET_BACKGROUND:
      return {
        ...state,
        background: action.background
      }
    case ADD_TOY:
      return addItem(state, action.toy, 'toys')
    case REMOVE_TOY:
      return removeItem(state, action.toy, 'toys')
    case CLEAR_AND_ADD_TOYS:
      return clearAndAddItems(state, action.newToy, 'toys', action.clearables)
    case REMOVE_ALL_TOYS:
      return removeAllItems(state, 'toys', mrPeenDefault.toys)
    case ADD_EXTRA:
      return addItem(state, action.extra, 'extras')
    case REMOVE_EXTRA:
      return removeItem(state, action.extra, 'extras')
    case CLEAR_AND_ADD_EXTRAS:
      return clearAndAddItems(state, action.newExtra, 'extras', action.clearables)
    case REMOVE_ALL_EXTRAS:
      return removeAllItems(state, 'extras', mrPeenDefault.extras)
    case ADD_MAKE_UP:
      return addItem(state, action.makeUpItem, 'makeUp')
    case REMOVE_MAKE_UP:
      return removeItem(state, action.makeUpItem, 'makeUp')
    case CLEAR_AND_ADD_MAKE_UP:
      return clearAndAddItems(state, action.newMakeUpItem, 'makeUp', action.clearables)
    case REMOVE_ALL_MAKE_UP:
      return removeAllItems(state, 'makeUp', mrPeenDefault.makeUp)
    case RESET:
      return mrPeenDefault
    default:
      return state
  }
}


const dressUpApp = combineReducers({
  selectables,
  peen
});

export default dressUpApp;