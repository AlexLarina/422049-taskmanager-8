import Task from './components/task';
import TaskEdit from './components/task-edit';

import {createFiltersTemplate} from '../src/template/filters';

import {createCards} from '../src/mocks/cards';
import {createFilters} from '../src/mocks/filters';

const CARDS_LIMIT = 6;

const cards = createCards(CARDS_LIMIT);
const filters = createFilters();

const filterContainerElement = document.querySelector(`.main__filter`);
const cardsContainerElement = document.querySelector(`.board__tasks`);

filterContainerElement.innerHTML = createFiltersTemplate(filters);

cards.forEach((card) => {
  const task = new Task(card);
  const taskEdit = new TaskEdit(card);

  let taskElement = task.render();
  let taskEditElement;

  cardsContainerElement.appendChild(taskElement);

  task.onClick(() => {
    taskEditElement = taskEdit.render();
    cardsContainerElement.replaceChild(taskEditElement, taskElement);
    task.unrender();
  });
});


