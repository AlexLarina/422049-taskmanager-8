import {createFiltersTemplate} from '../src/template/filters';
import {filters} from '../src/mocks/filters';
import {cards, buttons} from '../src/mocks/cards';
import {createCardsTemplate} from '../src/template/cards';

const filterContainerElement = document.querySelector(`.main__filter`);
const cardsContainerElement = document.querySelector(`.board__tasks`);

filterContainerElement.innerHTML = createFiltersTemplate(filters);
cardsContainerElement.innerHTML = createCardsTemplate(cards, buttons);
