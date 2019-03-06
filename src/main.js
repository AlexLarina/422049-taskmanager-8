import {createFiltersTemplate} from '../src/template/filters';
import {createCardsTemplate} from '../src/template/cards';

import {createCards} from '../src/mocks/cards';
import {createFilters} from '../src/mocks/filters';

const CARDS_LIMIT = 6;

const cards = createCards(CARDS_LIMIT);
const fitlers = createFilters()

const filterContainerElement = document.querySelector(`.main__filter`);
const cardsContainerElement = document.querySelector(`.board__tasks`);

filterContainerElement.innerHTML = createFiltersTemplate(filters);
cardsContainerElement.innerHTML = createCardsTemplate(cards);
