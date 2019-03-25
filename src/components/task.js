import Component from './component';
import {createCardTemplate} from '../template/cards';

export default class Task extends Component {
  constructor(data) {
    super(data);

    this.clickCallback = null;
    this.handleClick = this.handleClick.bind(this);
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
}
