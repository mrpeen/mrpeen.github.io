import selectables from './selectables';

export const ADD_SELECTABLES = 'ADD_SELECTABLES';
export const SELECT_SKINTONE = 'SELECT_SKINTONE';

export function addSelectables() {
  return {
    type: ADD_SELECTABLES,
    selectables
  }
}

export function selectSkintone(skintone) {
  return {
    type: SELECT_SKINTONE,
    skintone
  }
}