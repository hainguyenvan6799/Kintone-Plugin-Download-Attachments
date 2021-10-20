import {CustomDiv} from 'Components';

// import { addElementsToParentContainer } from "Utilities";

function addSubElementsForContainerLabelAndCheckBox(containerLabelAndCheckBox, checkBox, labelOfCheckBox, textDisplay) {
  checkBox.addSubElementToElement(labelOfCheckBox.getElement());
  labelOfCheckBox.getElement().appendChild(document.createTextNode(textDisplay));
  labelOfCheckBox.addSubElementToElement(containerLabelAndCheckBox.getElement());
}

function createContainerCheckBoxAndLabel(checkBox, labelOfCheckBox, textDisplay) {
  const containerLabelAndCheckBox = new CustomDiv();

  const containerLabelAndCheckBoxAttributes = {
    class: 'form-check'
  };

  containerLabelAndCheckBox.setAttribute(containerLabelAndCheckBoxAttributes);

  addSubElementsForContainerLabelAndCheckBox(containerLabelAndCheckBox, checkBox, labelOfCheckBox, textDisplay);

  return containerLabelAndCheckBox;
}

export {createContainerCheckBoxAndLabel};

// class ContainerCheckBox {
//   constructor(checkBox, labelCheckBox, textDisplay) {
//     this.checkBox = checkBox;
//     this.labelCheckBox = labelCheckBox;
//     this.textDisplay = textDisplay;
//   }

//   createContainerCheckBox() {
//     const containerCheckBox = new CustomDiv();
//     const containerCheckBoxAttributes = {
//       class: "form-check",
//     };
//     containerCheckBox.setAttribute(containerCheckBoxAttributes);
//     this.containerCheckBox = containerCheckBox;
//     this.addSubElements();
//   }

//   addSubElements() {
//     addElementsToParentContainer(this.labelCheckBox, [this.checkBox]);
//     this.labelCheckBox.appendTextNode(this.textDisplay);
//     addElementsToParentContainer(this.containerCheckBox, [this.labelCheckBox]);
//   }
// }

// export { ContainerCheckBox };
