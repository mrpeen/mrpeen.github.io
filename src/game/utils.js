export function findSkintone (state) {
  const {peen, selectables} = state;
  const skintones = selectables.find(({name}) => name === 'skintone').items;

  return skintones.find(({id}) => peen.skintone === id)
}