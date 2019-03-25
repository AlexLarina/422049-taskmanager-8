import cloneDeep from 'lodash.clonedeep';
import createElement from '../lib/create-element';

export default class Component {
  constructor(data) {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }

    this._data = cloneDeep(data);
    this._element = null;
  }

  get template() {
    throw new Error(`Template should be defined!`);
  }

  createEventListeners() {
    throw new Error(`Method 'createEventListeners' must be implemented`);
  }

  removeEventListeners() {
    throw new Error(`Method 'removeEventListeners' must be implemented`);
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
