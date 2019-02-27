const createRandomNumberRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min)) + min;

export const filters = [
  {
    name: `all`,
    state: `checked`,
    count: createRandomNumberRange()
  },
  {
    name: `overdue`,
    state: `disabled`,
    count: createRandomNumberRange()
  },
  {
    name: `today`,
    state: ``,
    count: createRandomNumberRange()
  },
  {
    name: `favourites`,
    state: ``,
    count: createRandomNumberRange()
  },
  {
    name: `tags`,
    state: ``,
    count: createRandomNumberRange()
  },
  {
    name: `archive`,
    state: ``,
    count: createRandomNumberRange()
  }
];
