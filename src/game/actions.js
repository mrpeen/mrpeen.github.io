import selectables from './static/selectables';

export const ADD_SELECTABLES = 'ADD_SELECTABLES';
export const SELECT_SKINTONE = 'SELECT_SKINTONE';
export const SELECT_CONTROL = 'SELECT_CONTROL';
export const SELECT_BLUSH = 'SELECT_BLUSH';
export const SELECT_CONDOM = 'SELECT_CONDOM';
export const ADD_TOY = 'ADD_TOY';
export const REMOVE_TOY = 'REMOVE_TOY';
export const REMOVE_ALL_TOYS = 'REMOVE_ALL_TOYS';
export const CLEAR_AND_ADD_TOYS = 'CLEAR_AND_ADD_TOYS';
export const SET_BACKGROUND = 'SET_BACKGROUND';
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

export function addToy(toy) {
  return {
    type: ADD_TOY,
    toy
  }
}

export function removeToy(toy) {
  return {
    type: REMOVE_TOY,
    toy
  }
}

export function clearAndAddToys(newToy, clearables) {
  return {
    type: CLEAR_AND_ADD_TOYS,
    newToy,
    clearables
  }
}

export function removeAllToys() {
  return {
    type: REMOVE_ALL_TOYS
  }
}

export function setBackground(background) {
  return {
    type: SET_BACKGROUND,
    background
  }
}

export function reset() {
  return {
    type: RESET
  }
}