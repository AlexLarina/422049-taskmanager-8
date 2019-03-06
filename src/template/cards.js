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
        class="card__btn card__btn--${control.name} ${(control.isDisabled) ? `disabled` : ``}">
        ${control.name}
      </button>`
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
        name="text">${card.text}</textarea>
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
    date: <span class="card__date-status">${card.deadline.status}</span>
  </button>
  <fieldset class="card__date-deadline" ${card.deadline.status === `no` ? `disabled` : ``}>
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

const createRepeatingDaysTemplate = (card, index) => (
  `<button class="card__repeat-toggle" type="button">
    repeat:<span class="card__repeat-status">${card.isRepeat ? `yes` : `no`}</span>
  </button>
  <fieldset class="card__repeat-days" ${card.isRepeat ? `` : `disabled`}>
    <div class="card__repeat-days-inner">
    ${card.days.map((day) => (
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
      ${card.hashtags
        .map((hashtag) => (
          `<span class="card__hashtag-inner">
          <input
            type="hidden"
            name="hashtag"
            value="${hashtag}"
            class="card__hashtag-hidden-input"
          />
          ${createHashtagButtonTemplate(hashtag)}
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
`);

const createColorsTemplate = (card) => (`
  <div class="card__colors-inner">
    <h3 class="card__colors-title">Color</h3>
    <div class="card__colors-wrap">
      ${card.colors
        .map((color) => (
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
        ))
        .join(``)
  }
    </div>
  </div>
`);

const createSettingsTemplate = (card, index) => (`
  <div class="card__settings">
    ${createDetailsTemplate(card, index)}
    ${createPictureTemplate(card)}
    ${createColorsTemplate(card)}
  </div>
`);

const createStatusBtnTemplate = () => (`
  <div class="card__status-btns">
    <button class="card__save" type="submit">save</button>
    <button class="card__delete" type="button">delete</button>
  </div>
`);

export const createCardsTemplate = (cards) => (
  cards
    .map((card, index) => (
      `<article class="card ${(card.isEdit) ? `card--edit` : ``} card--${card.color} ${(card.isRepeat) ? `card--repeat` : ``} ${(card.isDeadline) ? `card--deadline` : ``}">
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
    ))
    .join(``)
);
