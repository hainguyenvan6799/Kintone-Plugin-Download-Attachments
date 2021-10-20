export default class BasicElement {
  constructor(name, textDisplay) {
    this.initialElement(name, textDisplay);
  }

  initialElement(name, textDisplay) {
    this.element = document.createElement(name);
    if (textDisplay) {
      this.setInnerHTML(textDisplay);
    }
  }

  setAttribute(attributeObject) {
    for (const keyStr in attributeObject) {
      this.element.setAttribute(keyStr, attributeObject[keyStr]);
    }
  }

  setInnerHTML(textDisplay) {
    this.element.innerHTML = textDisplay;
  }

  getElement() {
    return this.element;
  }

  setStyle(styleObject) {
    for (const keyStr in styleObject) {
      this.label.style[keyStr] = styleObject[keyStr];
    }
  }

  addSubElementToElement(parentElement) {
    parentElement.appendChild(this.element);
  }

  appendTextNode(textDisplay) {
    this.element.appendChild(document.createTextNode(textDisplay));
  }

  addGlobalEventListener(type, callback) {
    this.element.addEventListener(type, (e) => callback(e));
  }

  remove() {
    this.element.remove();
  }
}