import {
  getRandomArrayItem,
  getRandomBoolean,
  createRandomNumber,
  chooseRandomArrayItems // @MAYBE
} from './random';

const cardParams = { // @TODO
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

export const createCards = (limit) => (
  [...(new Array(limit)).keys()].map(() => ({ // @NOTICE
    text: getRandomArrayItem(cardParams.TITLES),
    deadline: {
      status: `no`,
      date: ``,
      time: ``
    },
    isRepeat: getRandomBoolean(),
    isEdit: getRandomBoolean(),
    isDeadline: getRandomBoolean(),
    color: getRandomArrayItem(cardParams.COLORS),
    repeatStatus: `disabled`,
    days: chooseRandomArrayItems(cardParams.DAYS, createRandomNumber(1, cardParams.DAYS.length - 1)),
    colorSetting: ``,
    hashtags: chooseRandomArrayItems(createRandomNumber(0, cardParams.HASHTAGS.length), cardParams.HASHTAGS, true),
    imgSource: `img/add-photo.svg`,
    colors: chooseRandomArrayItems(createRandomNumber(0, cardParams.COLORS.length), cardParams.COLORS, true)
  }))
);
