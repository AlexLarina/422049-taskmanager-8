import {
  getRandomArrayItem,
  getRandomBoolean,
  createRandomNumber,
  chooseRandomArrayItems
} from '../random';

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

export const createCards = (limit) => (
  [...(new Array(limit)).keys()].map(() => ({
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
    hashtags: chooseRandomArrayItems(cardParams.HASHTAGS, createRandomNumber(0, cardParams.HASHTAGS.length)),
    imgSource: `img/add-photo.svg`,
    colors: chooseRandomArrayItems(cardParams.COLORS, createRandomNumber(0, cardParams.COLORS.length))
  }))
);
