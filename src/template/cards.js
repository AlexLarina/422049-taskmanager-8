import {
  createControlTemplate,
  createColorBarTemplate,
  createDescriptionTemplate,
  createStatusBtnTemplate,
  createHashtagTemplate,
  createPictureTemplate,
  createColorsTemplate
} from './common-card-elements';

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

const createDetailsTemplate = (card, index) => (`
  <div class="card__details">
    ${createDatesTemplate(card, index)}
    ${createHashtagTemplate(card)}
  </div>
`);

const createSettingsTemplate = (card, index) => (`
  <div class="card__settings">
    ${createDetailsTemplate(card, index)}
    ${createPictureTemplate(card)}
    ${createColorsTemplate(card, index)}
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

