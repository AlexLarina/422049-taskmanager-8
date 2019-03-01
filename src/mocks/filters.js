export const createRandomNumberRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const names = [`all`, `overdue`, `today`, `favourites`, `tags`, `archive`];
const states = [`checked`, `disabled`, ``];

export const filters = names.map((filterName) => ({
  name: filterName,
  state: states[createRandomNumberRange(0, states.length - 1)],
  count: createRandomNumberRange()
}));
