import {getRandomArrayItem, createRandomNumber} from '../lib/random';

const NAMES = [`all`, `overdue`, `today`, `favourites`, `tags`, `archive`];
const STATES = [`checked`, `disabled`, ``];

export const createFilters = () => NAMES.map((name) => ({
  name,
  state: getRandomArrayItem(STATES),
  count: createRandomNumber()
}));
