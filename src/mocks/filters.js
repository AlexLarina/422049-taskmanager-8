import {getRandomArrayItem, createRandomNumber} from '../random';

const names = [`all`, `overdue`, `today`, `favourites`, `tags`, `archive`]; // @NOTICE
const states = [`checked`, `disabled`, ``]; // @NOTICE

export const createFilters = () => names.map((name) => ({
  name,
  state: getRandomArrayItem(states),
  count: createRandomNumber()
}));
