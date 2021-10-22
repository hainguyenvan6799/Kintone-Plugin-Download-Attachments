import {CustomDiv, CustomParagraph} from 'Components';
import {addElementsToParentContainer} from 'Utilities';
import BasicElement from 'Components/BasicElement';
import {LABEL, USER_LANGUAGE} from "Languages";

function createCurrentTotalFileSize(currentTotalSize) {
  const elementToDisplaySize = new BasicElement('span', currentTotalSize);

  return elementToDisplaySize;
}

function createLabelForCurrentTotalFileSize() {
  const labelTotalSize = new CustomParagraph(LABEL.TOTAL_AND_SIZE_LIMIT[USER_LANGUAGE]);
  const labelTotalSizeAttributes = {
    class: 'float-right',
  };
  labelTotalSize.setAttribute(labelTotalSizeAttributes);

  return labelTotalSize;
}

function createColumnContainEstimatedFileSize() {
  const columnContainEstimatedFileSize = new CustomDiv();
  const columnContainEstimatedFileSizeAttributes = {
    class: 'col-7',
  };
  columnContainEstimatedFileSize.setAttribute(
    columnContainEstimatedFileSizeAttributes
  );

  return columnContainEstimatedFileSize;
}

function addContentToColumnEstimatedFileSize(
  estimatedFileSize,
  sizeLimitCanDownload,
  columnContainEstimatedFileSize
) {
  const labelTotalSize = createLabelForCurrentTotalFileSize();
  const spanForCurrentTotalSize = createCurrentTotalFileSize(estimatedFileSize);

  addElementsToParentContainer(labelTotalSize, [spanForCurrentTotalSize]);
  labelTotalSize
    .getElement()
    .appendChild(document.createTextNode(`/ ${sizeLimitCanDownload} MB`));

  addElementsToParentContainer(columnContainEstimatedFileSize, [
    labelTotalSize,
  ]);

  return {spanForCurrentTotalSize};
}

function createNotifyEstimatedFileSize(
  estimatedFileSize,
  sizeLimitCanDownload
) {
  const columnContainEstimatedFileSize = createColumnContainEstimatedFileSize();
  const {spanForCurrentTotalSize} = addContentToColumnEstimatedFileSize(
    estimatedFileSize,
    sizeLimitCanDownload,
    columnContainEstimatedFileSize
  );

  return {columnContainEstimatedFileSize, spanForCurrentTotalSize};
}

export {createNotifyEstimatedFileSize};

// class NotifyFileSize {
//   constructor(filesSize, sizeLimit) {
//     this.filesSize = filesSize;
//     this.sizeLimit = sizeLimit;
//     this.container = this.createContainer();
//     this.label = this.createLabel();
//     this.elementDisplaySize = this.createElementDisplaySize();
//     this.addSubElements();
//   }

//   createContainer() {
//     const container = new CustomDiv();
//     const containerAttributes = {
//       class: "col-7",
//     };
//     container.setAttribute(containerAttributes);

//     return container;
//   }

//   createLabel() {
//     const label = new CustomParagraph("Total/Size Limit: ");
//     const labelAttributes = {
//       class: "float-right",
//     };
//     label.setAttribute(labelAttributes);

//     return label;
//   }

//   createElementDisplaySize() {
//     const elementDisplaySize = new BasicElement("span", this.filesSize);

//     return elementDisplaySize;
//   }

//   addSubElements() {
//     addElementsToParentContainer(this.label, [this.elementDisplaySize]);
//     this.label.appendTextNode(`/ ${this.sizeLimit} MB`);
//     addElementsToParentContainer(this.container, [this.label]);
//   }

//   getElements() {
//     return {
//       containerFileSize: this.container,
//       elementDisplaySize: this.elementDisplaySize
//     }
//   }
// }

// export {NotifyFileSize}
