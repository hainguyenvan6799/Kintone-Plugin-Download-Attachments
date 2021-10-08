import { CustomDiv } from "../../..";

function addSubElementsForContainerLabelAndCheckBox(containerLabelAndCheckBox, checkBox, labelOfCheckBox, textDisplay) {
  checkBox.addSubElementToElement(labelOfCheckBox.getElement());
  labelOfCheckBox.getElement().appendChild(document.createTextNode(textDisplay));
  labelOfCheckBox.addSubElementToElement(containerLabelAndCheckBox.getElement());
}

function createContainerCheckBoxAndLabel(checkBox, labelOfCheckBox, textDisplay) {
  const containerLabelAndCheckBox = new CustomDiv();

  const containerLabelAndCheckBoxAttributes = {
    class: "form-check"
  }

  containerLabelAndCheckBox.setAttribute(containerLabelAndCheckBoxAttributes)

  addSubElementsForContainerLabelAndCheckBox(containerLabelAndCheckBox, checkBox, labelOfCheckBox, textDisplay)

  return containerLabelAndCheckBox;
}

export { createContainerCheckBoxAndLabel };
