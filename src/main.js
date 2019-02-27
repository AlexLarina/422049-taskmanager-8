import {createRandomNumberRange} from './utils.js'
import {createFiltersTemplate} from '../src/template/filters'
import {createCardsTemplate} from '../src/template/cards'

const filters = [
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

const cards = [
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
    color: 'black',
    repeatStatus: `disabled`,
    days: ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'],
    colorSetting: ``,
    hashtags: [],
    imgSource: `img/add-photo.svg`,
    colors: [`black`, `yellow`, `blue`, `green`, `pink`]
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
    color: 'pink',
    repeatStatus: `disabled`,
    days: ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'],
    colorSetting: `wave`,
    hashtags: [`repeat`, `cinema`, `entertaiment`],
    imgSource: `img/add-photo.svg`,
    colors: [`black`, `yellow`, `blue`, `green`, `pink`]
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
    color: 'yellow',
    repeatStatus: `disabled`,
    days: ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'],
    colorSetting: `wave`,
    hashtags: [`cinema`, `entertaiment`],
    imgSource: `img/add-photo.svg`,
    colors: [`black`, `yellow`, `blue`, `green`, `pink`]
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
    color: 'yellow',
    repeatStatus: `disabled`,
    days: ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'],
    colorSetting: `wave`,
    hashtags: [`repeat`, `cinema`, `entertaiment`],
    imgSource: `img/sample-img.jpg`,
    colors: [`black`, `yellow`, `blue`, `green`, `pink`]
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
    color: 'blue',
    repeatStatus: `disabled`,
    days: ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'],
    colorSetting: `wave`,
    hashtags: [`repeat`, `cinema`, `entertaiment`],
    imgSource: `img/add-photo.svg`,
    colors: [`black`, `yellow`, `blue`, `green`, `pink`]
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
    color: 'blue',
    repeatStatus: `disabled`,
    days: ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'],
    colorSetting: `wave`,
    hashtags: [`repeat`, `cinema`, `entertaiment`],
    imgSource: `img/sample-img.jpg`,
    colors: [`black`, `yellow`, `blue`, `green`, `pink`]
  }
]

const buttons = [
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
]

const filterContainerElement = document.querySelector('.main__filter');
const cardsContainerElement = document.querySelector('.board__tasks');

filterContainerElement.innerHTML = createFiltersTemplate(filters);
cardsContainerElement.innerHTML = createCardsTemplate(cards, buttons);
