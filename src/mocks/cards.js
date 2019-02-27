import {createRandomNumberRange} from './filters';

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
  DAYS: [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`],
  COLORS: [`black`, `yellow`, `blue`, `green`, `pink`],
  HASHTAGS: [`repeat`, `cinema`, `entertaiment`]
};

export const cards = [
  {
    text: `This is example of new task, you can add picture, set date and time, add tags.`,
    deadline: {
      status: `no`,
      date: ``,
      time: ``
    },
    isRepeat: `repeat`,
    isEdit: `edit`,
    isDeadline: ``,
    color: `black`,
    repeatStatus: `disabled`,
    days: chooseRandElements(createRandomNumberRange(1, cardParams.DAYS.length), cardParams.DAYS, true),
    colorSetting: ``,
    hashtags: chooseRandElements(createRandomNumberRange(0, cardParams.HASHTAGS.length), cardParams.HASHTAGS, true),
    imgSource: `img/add-photo.svg`,
    colors: chooseRandElements(createRandomNumberRange(0, cardParams.COLORS.length), cardParams.COLORS, true)
  },
  {
    text: `It is example of repeating task. It marks by wave.`,
    deadline: {
      status: `no`,
      date: ``,
      time: ``
    },
    isRepeat: `repeat`,
    isEdit: ``,
    isDeadline: ``,
    color: `pink`,
    repeatStatus: `disabled`,
    days: chooseRandElements(createRandomNumberRange(1, cardParams.DAYS.length), cardParams.DAYS, true),
    colorSetting: `wave`,
    hashtags: chooseRandElements(createRandomNumberRange(0, cardParams.HASHTAGS.length), cardParams.HASHTAGS, true),
    imgSource: `img/add-photo.svg`,
    colors: chooseRandElements(createRandomNumberRange(0, cardParams.COLORS.length), cardParams.COLORS, true)
  },
  {
    text: `This is card with missing deadline`,
    deadline: {
      status: `no`,
      date: ``,
      time: ``
    },
    isRepeat: ``,
    isEdit: ``,
    isDeadline: `deadline`,
    color: `yellow`,
    repeatStatus: `disabled`,
    days: chooseRandElements(createRandomNumberRange(1, cardParams.DAYS.length), cardParams.DAYS, true),
    colorSetting: `wave`,
    hashtags: chooseRandElements(createRandomNumberRange(0, cardParams.HASHTAGS.length), cardParams.HASHTAGS, true),
    imgSource: `img/add-photo.svg`,
    colors: chooseRandElements(createRandomNumberRange(0, cardParams.COLORS.length), cardParams.COLORS, true)
  },
  {
    text: `Here is a card with filled data`,
    deadline: {
      status: `yes`,
      date: `23 September`,
      time: `11:15 PM`
    },
    isRepeat: `repeat`,
    isEdit: `edit`,
    isDeadline: ``,
    color: `yellow`,
    repeatStatus: `disabled`,
    days: chooseRandElements(createRandomNumberRange(1, cardParams.DAYS.length), cardParams.DAYS, true),
    colorSetting: `wave`,
    hashtags: chooseRandElements(createRandomNumberRange(0, cardParams.HASHTAGS.length), cardParams.HASHTAGS, true),
    imgSource: `img/sample-img.jpg`,
    colors: chooseRandElements(createRandomNumberRange(0, cardParams.COLORS.length), cardParams.COLORS, true)
  },
  {
    text: ``,
    deadline: {
      status: `no`,
      date: ``,
      time: ``
    },
    isRepeat: ``,
    isEdit: ``,
    isDeadline: ``,
    color: `blue`,
    repeatStatus: `disabled`,
    days: chooseRandElements(createRandomNumberRange(1, cardParams.DAYS.length), cardParams.DAYS, true),
    colorSetting: `wave`,
    hashtags: chooseRandElements(createRandomNumberRange(0, cardParams.HASHTAGS.length), cardParams.HASHTAGS, true),
    imgSource: `img/add-photo.svg`,
    colors: chooseRandElements(createRandomNumberRange(0, cardParams.COLORS.length), cardParams.COLORS, true)
  },
  {
    text: ``,
    deadline: {
      status: `no`,
      date: ``,
      time: ``
    },
    isRepeat: ``,
    isEdit: ``,
    isDeadline: ``,
    color: `blue`,
    repeatStatus: `disabled`,
    days: chooseRandElements(createRandomNumberRange(1, cardParams.DAYS.length), cardParams.DAYS, true),
    colorSetting: `wave`,
    hashtags: chooseRandElements(createRandomNumberRange(0, cardParams.HASHTAGS.length), cardParams.HASHTAGS, true),
    imgSource: `img/sample-img.jpg`,
    colors: chooseRandElements(createRandomNumberRange(0, cardParams.COLORS.length), cardParams.COLORS, true)
  }
];

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
