import selectables from './static/selectables';

export const ADD_SELECTABLES = 'ADD_SELECTABLES';
export const SELECT_SKINTONE = 'SELECT_SKINTONE';
export const SELECT_CONTROL = 'SELECT_CONTROL';
export const SELECT_BLUSH = 'SELECT_BLUSH';
export const SELECT_CONDOM = 'SELECT_CONDOM';
export const RESET = 'RESET';

export function addSelectables() {
  return {
    type: ADD_SELECTABLES,
    selectables
  }
}

export function selectControl(control) {
  return {
    type: SELECT_CONTROL,
    control
  }
}

export function selectSkintone(skintone) {
  return {
    type: SELECT_SKINTONE,
    skintone
  }
}

export function selectBlush(blush) {
  return {
    type: SELECT_BLUSH,
    blush
  }
}

export function selectCondom(condom) {
  return {
    type: SELECT_CONDOM,
    condom
  }
}

export function reset() {
  return {
    type: RESET
  }
}