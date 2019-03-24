import {createCardEditTemplate} from '../template/card-edit';
import createElement from '../create-element';

export default class TaskEdit {
  constructor(data) {
    this._data = data;

    this._element = null;
  }

  get template() {
    return createCardEditTemplate(this._data);
  }

  render() {
    this._element = createElement(this.template);

    return this._element;
  }

  unrender() {
    this._element = null;
  }
}
