import { skintones } from './selectables';

export const ADD_SKINTONES = 'ADD_SKINTONES';
export const SELECT_SKINTONE = 'SELECT_SKINTONE';

export function addSkintones() {
  return {
    type: ADD_SKINTONES,
    skintones
  }
}

export function selectSkintone(skintone) {
  return {
    type: SELECT_SKINTONE,
    skintone
  }
}