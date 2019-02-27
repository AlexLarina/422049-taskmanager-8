import {createControlTemplate, createCardDescriptionTemplate,
  createColorBarTemplate, createCardSettingsTemplate, createCardStatusBtnTemplate} from '../utils';

export const createCardsTemplate = (cards, buttons) => (
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
