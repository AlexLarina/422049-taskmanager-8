export const createRandomNumberRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const filterNames = [`all`, `overdue`, `today`, `favourites`, `tags`, `archive`];
const filterStates = [`checked`, `disabled`, ``];

export const filters = filterNames.map((filterName) => ({
  name: filterName,
  state: filterStates[createRandomNumberRange(0, filterStates.length - 1)],
  count: createRandomNumberRange()
}));
