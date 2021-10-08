export default class BasicElement {
    constructor(name, textDisplay) {
        this.initialElement(name, textDisplay)
    }

    initialElement (name, textDisplay) {
        this.element = document.createElement(name);
        if(textDisplay) {
            this.setInnerHTML(textDisplay);
        }
    }

    setAttribute (attributeObject) {
        for(let keyStr in attributeObject) {
            this.element.setAttribute(keyStr, attributeObject[keyStr]);
        }
    }

    setInnerHTML (textDisplay) {
        this.element.innerHTML = textDisplay;
    }

    getElement () {
        return this.element;
    }

    setStyle (styleObject) {
        for(let keyStr in styleObject) {
            this.label.style[keyStr] = styleObject[keyStr];
        }
    }

    addSubElementToElement(parentElement) {
        parentElement.appendChild(this.element);
    }
}