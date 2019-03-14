import {createCardTemplate} from '../template/cards';
import createElement from '../create-element';

export default class Task {
  constructor(data) {
    this._data = data;

    this.clickCallback = null;
    this.handleClick = this.handleClick.bind(this);
    this._element = null;
  }

  get template() {
    return createCardTemplate(this._data);
  }

  createEventListeners() {
    this._element.querySelector(`.card__btn--edit`).addEventListener(`click`, this.handleClick);
  }

  removeEventListeners() {
    this._element.querySelector(`.card__btn--edit`).removeEventListener(`click`, this.handleClick);
  }

  handleClick() {
    if (this.clickCallback) {
      this.clickCallback();
    }
  }

  onClick(callback) {
    this.clickCallback = callback;
  }

  render() {
    this._element = createElement(this.template);
    this.createEventListeners();

    return this._element;
  }

  unrender() {
    this.removeEventListeners();
    this._element = null;
  }
}
