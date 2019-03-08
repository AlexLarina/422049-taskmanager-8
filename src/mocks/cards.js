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


const TITLES = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
const TAGS = [`homework`, `theory`, `practice`, `intensive`, `keks`];
const TAG_NUMBER = {
  MIN: 0,
  MAX: 3
};
const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];
const MILLY_SECONDS_PER_WEEK = 604800000;

const createDeadline = () => {
  const MONTHS = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];
  const now = new Date().getTime();
  const deadline = new Date(createRandomNumber(now - MILLY_SECONDS_PER_WEEK, now + MILLY_SECONDS_PER_WEEK));
  return `${deadline.getDay()} ${MONTHS[deadline.getMonth()]}`;
};

const createCard = () => ({
  title: getRandomArrayItem(TITLES),
  dueDate: createDeadline(),
  tags: chooseRandomArrayItems(Array.from(new Set(TAGS).values()), createRandomNumber(TAG_NUMBER.MIN, TAG_NUMBER.MAX)),
  picture: `http://picsum.photos/100/100?r=${createRandomNumber()}`,
  color: getRandomArrayItem(COLORS),
  repeatingDays: {
    Mo: getRandomBoolean(),
    Tu: getRandomBoolean(),
    We: getRandomBoolean(),
    Th: getRandomBoolean(),
    Fr: getRandomBoolean(),
    Sa: getRandomBoolean(),
    Su: getRandomBoolean()
  },
  isFavorite: getRandomBoolean(),
  isDone: getRandomBoolean()
});


export const createCardsExample = (limit) => [...(new Array(limit)).keys()].map(() => createCard());


