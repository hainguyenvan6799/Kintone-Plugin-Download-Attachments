import { CustomDiv, CustomParagraph } from "Components";
import { addElementsToParentContainer } from "Utilities";
import BasicElement from "Components/BasicElement";

function createCurrentTotalFileSize(currentTotalSize) {
  const elementToDisplaySize = new BasicElement("span", currentTotalSize);

  return elementToDisplaySize;
}

function createLabelForCurrentTotalFileSize() {
  const labelTotalSize = new CustomParagraph("Total/Size Limit: ");
  const labelTotalSizeAttributes = {
    class: "float-right",
  };
  labelTotalSize.setAttribute(labelTotalSizeAttributes);

  return labelTotalSize;
}

function createColumnContainEstimatedFileSize() {
  const columnContainEstimatedFileSize = new CustomDiv();
  const columnContainEstimatedFileSizeAttributes = {
    class: "col-7",
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

  return { spanForCurrentTotalSize };
}

function createNotifyEstimatedFileSize(
  estimatedFileSize,
  sizeLimitCanDownload
) {
  const columnContainEstimatedFileSize = createColumnContainEstimatedFileSize();
  const { spanForCurrentTotalSize } = addContentToColumnEstimatedFileSize(
    estimatedFileSize,
    sizeLimitCanDownload,
    columnContainEstimatedFileSize
  );

  return { columnContainEstimatedFileSize, spanForCurrentTotalSize };
}

export { createNotifyEstimatedFileSize };
