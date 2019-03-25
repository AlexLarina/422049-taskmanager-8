import Component from './component';
import {createCardEditTemplate} from '../template/card-edit';

export default class TaskEdit extends Component {
  constructor(data) {
    super(data);

    this.submitCallback = null;
    this.deleteCallback = null;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  get template() {
    return createCardEditTemplate(this._data);
  }

  createEventListeners() {
    this._element.querySelector(`.card__save`).addEventListener(`submit`, this.handleSubmit);
    this._element.querySelector(`.card__delete`).addEventListener(`click`, this.handleDelete);
  }

  removeEventListeners() {
    this._element.querySelector(`.card__save`).removeEventListener(`submit`, this.handleSubmit);
    this._element.querySelector(`.card__delete`).removeEventListener(`click`, this.handleDelete);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.submitCallback) {
      this.submitCallback();
    }
  }

  handleDelete() {
    if (this.deleteCallback) {
      this.deleteCallback();
    }
  }

  onSubmit(callback) {
    this.submitCallback = callback;
  }

  onDelete(callback) {
    this.deleteCallback = callback;
  }
}
