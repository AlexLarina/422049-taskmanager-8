export const createRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min)) + min;
export const getRandomBoolean = () => (Math.random() > 0.5) ? true : false;
export const getRandomArrayItem = (array) => array[createRandomNumber(0, array.length - 1)];

export const chooseRandomArrayItems = (array, size) => ( // @NOTICE
  array
    .sort(() => Math.random() - 0.5)
    .slice(0, size)
);
