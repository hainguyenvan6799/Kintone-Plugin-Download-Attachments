import BasicElement from "Components/BasicElement";

export class CustomLabel extends BasicElement {
  constructor(textDisplay) {
    super("label", textDisplay);
  }

  updateInfoLabel(textDisplay = "", labelFor = "") {
    this.setInnerHTML(textDisplay);
    this.setAttribute({
      htmlFor: labelFor,
    });
  }
}
