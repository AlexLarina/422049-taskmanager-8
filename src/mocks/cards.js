import {createRandomNumberRange} from './filters';

const CARDS_NUMBER = 6;
const getRandomBoolean = () => (Math.random() > 0.5) ? true : false;

const chooseRandElements = (length, array, unique) => {
  const newArr = [];

  while (newArr.length < length) {
    const elem = array[createRandomNumberRange(0, array.length - 1)];

    if (unique && newArr.indexOf(elem) !== -1) {
      continue;
    } else {
      newArr.push(elem);
    }
  }

  return newArr;
};

const cardParams = {
  TITLES: [
    `This is example of new task, you can add picture, set date and time, add tags.`,
    `It is example of repeating task. It marks by wave.`,
    `This is card with missing deadline`,
    `Here is a card with filled data`
  ],
  DAYS: [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`],
  COLORS: [`black`, `yellow`, `blue`, `green`, `pink`],
  HASHTAGS: [`repeat`, `cinema`, `entertaiment`]
};

const createCards = () => {
  let i = 0;
  const cardsArray = [];
  while (i < CARDS_NUMBER) {
    cardsArray.push({
      text: cardParams.TITLES[createRandomNumberRange(0, cardParams.TITLES.length - 1)],
      deadline: {
        status: `no`,
        date: ``,
        time: ``
      },
      isRepeat: getRandomBoolean(),
      isEdit: getRandomBoolean(),
      isDeadline: getRandomBoolean(),
      color: cardParams.COLORS[createRandomNumberRange(0, cardParams.COLORS.length - 1)],
      repeatStatus: `disabled`,
      days: chooseRandElements(createRandomNumberRange(1, cardParams.DAYS.length), cardParams.DAYS, true),
      colorSetting: ``,
      hashtags: chooseRandElements(createRandomNumberRange(0, cardParams.HASHTAGS.length), cardParams.HASHTAGS, true),
      imgSource: `img/add-photo.svg`,
      colors: chooseRandElements(createRandomNumberRange(0, cardParams.COLORS.length), cardParams.COLORS, true)
    });
    i++;
  }
  return cardsArray;
};

export const cards = createCards();

// export const cards = [
//   {
//     text: cardParams.TITLES[0],
//     deadline: {
//       status: `no`,
//       date: ``,
//       time: ``
//     },
//     isRepeat: getRandomBoolean(),
//     isEdit: getRandomBoolean(),
//     isDeadline: getRandomBoolean(),
//     color: cardParams.COLORS[createRandomNumberRange(0, cardParams.COLORS.length)],
//     repeatStatus: `disabled`,
//     days: chooseRandElements(createRandomNumberRange(1, cardParams.DAYS.length), cardParams.DAYS, true),
//     colorSetting: ``,
//     hashtags: chooseRandElements(createRandomNumberRange(0, cardParams.HASHTAGS.length), cardParams.HASHTAGS, true),
//     imgSource: `img/add-photo.svg`,
//     colors: chooseRandElements(createRandomNumberRange(0, cardParams.COLORS.length), cardParams.COLORS, true)
//   },
//   {
//     text: cardParams.TITLES[1],
//     deadline: {
//       status: `no`,
//       date: ``,
//       time: ``
//     },
//     isRepeat: getRandomBoolean(),
//     isEdit: getRandomBoolean(),
//     isDeadline: getRandomBoolean(),
//     color: cardParams.COLORS[createRandomNumberRange(0, cardParams.COLORS.length)],
//     repeatStatus: `disabled`,
//     days: chooseRandElements(createRandomNumberRange(1, cardParams.DAYS.length), cardParams.DAYS, true),
//     colorSetting: `wave`,
//     hashtags: chooseRandElements(createRandomNumberRange(0, cardParams.HASHTAGS.length), cardParams.HASHTAGS, true),
//     imgSource: `img/add-photo.svg`,
//     colors: chooseRandElements(createRandomNumberRange(0, cardParams.COLORS.length), cardParams.COLORS, true)
//   },
//   {
//     text: cardParams.TITLES[2],
//     deadline: {
//       status: `no`,
//       date: ``,
//       time: ``
//     },
//     isRepeat: getRandomBoolean(),
//     isEdit: getRandomBoolean(),
//     isDeadline: getRandomBoolean(),
//     color: cardParams.COLORS[createRandomNumberRange(0, cardParams.COLORS.length)],
//     repeatStatus: `disabled`,
//     days: chooseRandElements(createRandomNumberRange(1, cardParams.DAYS.length), cardParams.DAYS, true),
//     colorSetting: `wave`,
//     hashtags: chooseRandElements(createRandomNumberRange(0, cardParams.HASHTAGS.length), cardParams.HASHTAGS, true),
//     imgSource: `img/add-photo.svg`,
//     colors: chooseRandElements(createRandomNumberRange(0, cardParams.COLORS.length), cardParams.COLORS, true)
//   },
//   {
//     text: cardParams.TITLES[3],
//     deadline: {
//       status: `yes`,
//       date: `23 September`,
//       time: `11:15 PM`
//     },
//     isRepeat: getRandomBoolean(),
//     isEdit: getRandomBoolean(),
//     isDeadline: getRandomBoolean(),
//     color: cardParams.COLORS[createRandomNumberRange(0, cardParams.COLORS.length)],
//     repeatStatus: `disabled`,
//     days: chooseRandElements(createRandomNumberRange(1, cardParams.DAYS.length), cardParams.DAYS, true),
//     colorSetting: `wave`,
//     hashtags: chooseRandElements(createRandomNumberRange(0, cardParams.HASHTAGS.length), cardParams.HASHTAGS, true),
//     imgSource: `img/sample-img.jpg`,
//     colors: chooseRandElements(createRandomNumberRange(0, cardParams.COLORS.length), cardParams.COLORS, true)
//   },
//   {
//     text: ``,
//     deadline: {
//       status: `no`,
//       date: ``,
//       time: ``
//     },
//     isRepeat: getRandomBoolean(),
//     isEdit: getRandomBoolean(),
//     isDeadline: getRandomBoolean(),
//     color: cardParams.COLORS[createRandomNumberRange(0, cardParams.COLORS.length)],
//     repeatStatus: `disabled`,
//     days: chooseRandElements(createRandomNumberRange(1, cardParams.DAYS.length), cardParams.DAYS, true),
//     colorSetting: `wave`,
//     hashtags: chooseRandElements(createRandomNumberRange(0, cardParams.HASHTAGS.length), cardParams.HASHTAGS, true),
//     imgSource: `img/add-photo.svg`,
//     colors: chooseRandElements(createRandomNumberRange(0, cardParams.COLORS.length), cardParams.COLORS, true)
//   },
//   {
//     text: ``,
//     deadline: {
//       status: `no`,
//       date: ``,
//       time: ``
//     },
//     isRepeat: getRandomBoolean(),
//     isEdit: getRandomBoolean(),
//     isDeadline: getRandomBoolean(),
//     color: cardParams.COLORS[createRandomNumberRange(0, cardParams.COLORS.length)],
//     repeatStatus: `disabled`,
//     days: chooseRandElements(createRandomNumberRange(1, cardParams.DAYS.length), cardParams.DAYS, true),
//     colorSetting: `wave`,
//     hashtags: chooseRandElements(createRandomNumberRange(0, cardParams.HASHTAGS.length), cardParams.HASHTAGS, true),
//     imgSource: `img/sample-img.jpg`,
//     colors: chooseRandElements(createRandomNumberRange(0, cardParams.COLORS.length), cardParams.COLORS, true)
//   }
// ];

export const buttons = [
  {
    name: `edit`,
    isDisabled: ``
  },
  {
    name: `archive`,
    isDisabled: ``
  },
  {
    name: `favourites`,
    isDisabled: `card__btn--disabled`
  }
];
