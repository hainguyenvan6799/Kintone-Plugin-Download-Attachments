import BasicElement from '../BasicElement';

export class CustomButton extends BasicElement {
  constructor(textDisplay) {
    super('button', textDisplay);
  }

  disable() {
    this.element.disabled = true;
  }

  toggleDisable(isDisable) {
    this.element.disabled = isDisable;
  }
}