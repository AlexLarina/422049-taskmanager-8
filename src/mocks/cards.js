import {
  getRandomArrayItem,
  getRandomBoolean,
  createRandomNumber,
  chooseRandomArrayItems
} from '../random';

const TITLES = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
const TAGS = [`homework`, `theory`, `practice`, `intensive`, `keks`];
const TAG_NUMBER = {
  MIN: 0,
  MAX: 3
};
const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];
const DAYS = [`Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`];
const MONTHS = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

const createDeadline = () => {
  const now = new Date().getTime();
  const deadline = new Date(now + createRandomNumber(-WEEK_MS, WEEK_MS));

  return deadline;
};

const createCard = () => ({
  title: getRandomArrayItem(TITLES),
  dueDate: createDeadline(),
  tags: new Set(chooseRandomArrayItems(TAGS, createRandomNumber(TAG_NUMBER.MIN, TAG_NUMBER.MAX))),
  picture: `http://picsum.photos/100/100?r=${createRandomNumber()}`,
  color: getRandomArrayItem(COLORS),
  repeatingDays: new Map(DAYS.map((day) => [day, getRandomBoolean()])),
  isFavorite: getRandomBoolean(),
  isDone: getRandomBoolean(),
  getDeadlineDate() {
    return `${this.dueDate.getDay()} ${MONTHS[this.dueDate.getMonth()]}`;
  },
  getDeadlineTime() {
    return `${this.dueDate.getHours()}:${this.dueDate.getMinutes()}`;
  },
  checkRepeatingDays() {
    let isRepeat = false;
    for (const value of this.repeatingDays.values()) {
      if (value === true) {
        isRepeat = true;
        break;
      }
    }
    return isRepeat;
  }
});


export const createCards = (limit) => [...(new Array(limit)).keys()].map(() => createCard());
