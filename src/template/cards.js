const createControlTemplate = () => {
  const controls = [
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

  const controlsTemplate = controls
    .map((control) => (
      `<button
        type="button"
        class="card__btn card__btn--${control.name} ${(control.isDisabled) ? `disabled` : ``}"
        >${control.name}</button>
        `
    ))
    .join(``);

  return (
    `<div class="card__control">
      ${controlsTemplate}
    </div>`
  );
};

const createDescriptionTemplate = (card) => (
  `<div class="card__textarea-wrap">
    <label>
      <textarea
        class="card__text"
        placeholder="Start typing your text here..."
        name="text">${card.title}</textarea>
    </label>
  </div>`
);

const createColorBarTemplate = (card) => (
  `<div class="card__color-bar">
    <svg class="card__color-bar-${card.colorSetting}" width="100%" height="10">
      <use xlink:href="#wave"></use>
    </svg>
  </div>`
);

const createDeadlineTemplate = (card) => (
  `<button class="card__date-deadline-toggle" type="button">
    date: <span class="card__date-status">no</span>
  </button>
  <fieldset class="card__date-deadline" disabled>
    <label class="card__input-deadline-wrap">
      <input
        class="card__date"
        type="text"
        placeholder="23 September"
        name="date"
        value="${card.getDeadlineDate()}"
      />
    </label>
    <label class="card__input-deadline-wrap">
      <input
        class="card__time"
        type="text"
        placeholder="11:15 PM"
        name="time"
        value="${card.getDeadlineTime()}"
      />
    </label>
  </fieldset>`
);

const createRepeatingDaysTemplate = (card, index) => (
  `<button class="card__repeat-toggle" type="button">
    repeat:<span class="card__repeat-status">no</span>
  </button>
  <fieldset class="card__repeat-days" disabled>
    <div class="card__repeat-days-inner">
    ${[...card.repeatingDays.keys()].map((day) => (
    `<input
        class="visually-hidden card__repeat-day-input"
        type="checkbox"
        id="repeat-${day}-${index}"
        name="repeat"
        value="${day}"
      />
      <label class="card__repeat-day" for="repeat-${day}-${index}">${day}</label
      >`
  ))
    .join(``)}
    </div>
  </fieldset>`
);

const createDatesTemplate = (card) => (`
  <div class="card__dates">
    ${createDeadlineTemplate(card)}
    ${createRepeatingDaysTemplate(card)}
  </div>`
);

const createHashtagButtonTemplate = (hashtag) => `
  <button type="button" class="card__hashtag-name">
    #${hashtag}
  </button>
  <button type="button" class="card__hashtag-delete">
    delete
  </button>
`;

const createHashtagTemplate = (card) => (
  `<div class="card__hashtag">
    <div class="card__hashtag-list">
      ${[...card.tags.keys()]
        .map((tag) => (
          `<span class="card__hashtag-inner">
          <input
            type="hidden"
            name="hashtag"
            value="${tag}"
            class="card__hashtag-hidden-input"
          />
          ${createHashtagButtonTemplate(tag)}
        </span>`
        ))
        .join(``)
  }
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

const createDetailsTemplate = (card, index) => (`
  <div class="card__details">
    ${createDatesTemplate(card, index)}
    ${createHashtagTemplate(card)}
  </div>
`);

const createPictureTemplate = (card) => (`
  <label class="card__img-wrap card__img-wrap--empty">
    <input
      type="file"
      class="card__img-input visually-hidden"
      name="img"
    />
    <img
      src="${card.picture}"
      alt="task picture"
      class="card__img"
    />
  </label>
`);

const createColorsTemplate = (card, index) => (`
  <div class="card__colors-inner">
    <h3 class="card__colors-title">Color</h3>
    <div class="card__colors-wrap">
      <input
            type="radio"
            id="color-${card.color}-${index}"
            class="card__color-input card__color-input--${card.color} visually-hidden"
            name="color"
            value="${card.color}"
          />
          <label
            for="color-${card.color}-${index}"
            class="card__color card__color--${card.color}"
            >${card.color}
          </label>
    </div>
  </div>
`);

const createSettingsTemplate = (card, index) => (`
  <div class="card__settings">
    ${createDetailsTemplate(card, index)}
    ${createPictureTemplate(card)}
    ${createColorsTemplate(card, index)}
  </div>
`);

const createStatusBtnTemplate = () => (`
  <div class="card__status-btns">
    <button class="card__save" type="submit">save</button>
    <button class="card__delete" type="button">delete</button>
  </div>
`);

export const createCardTemplate = (card, index) => (
  `<article class="card card--${card.color}">
    <form class="card__form" method="get">
      <div class="card__inner">
        ${createControlTemplate()}
        ${createColorBarTemplate(card)}
        ${createDescriptionTemplate(card)}
        ${createSettingsTemplate(card, index)}
        ${createStatusBtnTemplate()}
      </div>
    </form>
  </article>`
);

export const createCardsTemplate = (cards) => (
  cards
    .map((card, index) => (
      createCardTemplate(card, index)
    ))
    .join(``)
);

