const createRandomNumberRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min)) + min;

export {createRandomNumberRange};
