/* constants */

/* function */

const createRandomNumberRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const createFiltersTemplate = (filters) => (
  filters
    .map((filter) => (
      `<label for="${filter.id}" class="filter__label">
        ${filter.name.toUpperCase()} <span class="filter__all-count">${filter.count}</span>
      </label>
      <input
        type="radio"
        id="filter__${filter.name}"
        class="filter__input visually-hidden"
        name="filter"
        ${filter.state}
      />`
    ))
    .join(``)
);

const createControlTemplate = (controls) => {
  const controlsTemplate = controls
  .map((control) => (
  `<button type="button" class="card__btn card__btn--${control.name} ${control.isDisabled}">
        ${control.name}
  </button>`
  ))
  .join(``);

  return (
    `<div class="card__control">${controlsTemplate}</div>`
  );
};

const createCardDescriptionTemplate = (card) => `
  <div class="card__textarea-wrap">
    <label>
      <textarea
        class="card__text"
        placeholder="Start typing your text here..."
        name="text">${card.text}</textarea>
    </label>
  </div>
  `
;

const createColorBarTemplate = (card) => (
  `<div class="card__color-bar">
    <svg class="card__color-bar-${card.colorSetting}" width="100%" height="10">
      <use xlink:href="#wave"></use>
    </svg>
  </div>`
);

const createCardDeadlineTemplate = (card) =>  (`
  <button class="card__date-deadline-toggle" type="button">
    date: <span class="card__date-status">${card.deadline.status}</span>
  </button>
  <fieldset class="card__date-deadline" ` +
  ((card.deadline.status === `no`) ? `disabled` : ``) +
  `>
    <label class="card__input-deadline-wrap">
      <input
        class="card__date"
        type="text"
        placeholder="23 September"
        name="date"
        value="${card.deadline.date}"
      />
    </label>
    <label class="card__input-deadline-wrap">
      <input
        class="card__time"
        type="text"
        placeholder="11:15 PM"
        name="time"
        value="${card.deadline.time}"
      />
    </label>
  </fieldset>`
);

const createRepeatingCardTemplate = (card) => (`
  <button class="card__repeat-toggle" type="button">
    repeat:<span class="card__repeat-status">yes</span>
  </button>

  <fieldset class="card__repeat-days"` +
  ((card.isRepeat === `repeat`) ? `` : `disabled`) +
  `>
    <div class="card__repeat-days-inner">` +
    card.days
    .map((day) => (
      `<input
        class="visually-hidden card__repeat-day-input"
        type="checkbox"
        id="repeat-${day}-1"
        name="repeat"
        value="${day}"
      />
      <label class="card__repeat-day" for="repeat-${day}-1"
        >${day}</label
      >`
    ))
    .join(``) +
    `</div>
  </fieldset>`
);

const createCardDatesTemplate = (card) => (`
  <div class="card__dates">
    ${createCardDeadlineTemplate(card)}
    ${createRepeatingCardTemplate(card)}
  </div>`
);

const createHashtagBtnTemplate = (name) => `
  <button type="button" class="card__hashtag-name">
    #${name}
  </button>
  <button type="button" class="card__hashtag-delete">
    delete
  </button>
`;

const createHashtagTemplate = (card) => (
  `<div class="card__hashtag">
    <div class="card__hashtag-list">`+
      card.hashtags.map((hashtag) => (
        `<span class="card__hashtag-inner">
          <input
            type="hidden"
            name="hashtag"
            value="${hashtag}"
            class="card__hashtag-hidden-input"
          />` +
          createHashtagBtnTemplate(hashtag) +
        `</span>`
      )).join(``) + `
    </div>
    <label>
      <input
        type="text"
        class="card__hashtag-input"
        name="hashtag-input"
        placeholder="Type new hashtag here"
      />
    </label>
  </div>`
);

const createCardDetailsTemplate = (card) => (`
  <div class="card__details"> +
    ${createCardDatesTemplate(card)}
    ${createHashtagTemplate(card)}
  </div>
`
);

const createCardPictureTemplate  = (card) => (`
  <label class="card__img-wrap">
    <input
      type="file"
      class="card__img-input visually-hidden"
      name="img"
    />
    <img
      src="${card.imgSource}"
      alt="task picture"
      class="card__img"
    />
  </label>
`
);

const createCardColorsTemplate = (card) => (`
  <div class="card__colors-inner">
    <h3 class="card__colors-title">Color</h3>
    <div class="card__colors-wrap">`+
      card.colors.map((color) => (
        `<input
          type="radio"
          id="color-${color}-4"
          class="card__color-input card__color-input--${color} visually-hidden"
          name="color"
          value="${color}"
        />
        <label
          for="color-${color}-4"
          class="card__color card__color--${color}"
          >${color}</label
        >`
      )).join(``) +
    `</div>
  </div>
`
);

const createCardSettingsTemplate = (card) => (`
  <div class="card__settings">
    ${createCardDetailsTemplate(card)}
    ${createCardPictureTemplate(card)}
    ${createCardColorsTemplate(card)}
  </div>
`
);

const createCardStatusBtnTemplate = () => (`
  <div class="card__status-btns">
    <button class="card__save" type="submit">save</button>
    <button class="card__delete" type="button">delete</button>
  </div>
`);

const createCardsTemplate = (cards) => (
  cards
    .map((card) => (
      `<article class="card card--${card.isEdit} card--${card.color} card--${card.isRepeat} card--${card.isDeadline}">
        <form class="card__form" method="get">
          <div class="card__inner">
            ${createControlTemplate(buttons)}
            ${createColorBarTemplate(card)}
            ${createCardDescriptionTemplate(card)}
            ${createCardSettingsTemplate(card)}
            ${createCardStatusBtnTemplate()}
          </div>
        </form>
      </article>`
    ))
    .join(``)
);

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
cardsContainerElement.innerHTML = createCardsTemplate(cards);
