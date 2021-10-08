import { CustomDiv } from "Components/";
import { addElementsToParentContainer } from "Utilities/";
import {
  createNotifyEstimatedFileSize,
  createSelectAllCheckBox,
} from "./ContentRowOneModalBody";
import { createRecordsCheckBox } from "./ContentRowTwoModalBody";
import { createModalBodyContainer } from "./ModalBodyContainer";

function createRowOneOfModalBodyContainer() {
  const rowOne = new CustomDiv();
  const rowOneAttributes = {
    class: "row",
  };
  rowOne.setAttribute(rowOneAttributes);

  return rowOne;
}

function addRowOneToModalBodyContainer(
  sizeLimitCanDownload,
  modalBodyContainer
) {
  const rowOneOfModalBody = createRowOneOfModalBodyContainer();
  const {
    columnContainSelectAllCheckBox: contentLeftRowOne,
    selectAllCheckBox,
  } = createSelectAllCheckBox();
  const {
    columnContainEstimatedFileSize: contentRightRowOne,
    spanForCurrentTotalSize,
  } = createNotifyEstimatedFileSize(1000, sizeLimitCanDownload);

  addElementsToParentContainer(rowOneOfModalBody, [
    contentLeftRowOne,
    contentRightRowOne,
  ]);
  addElementsToParentContainer(modalBodyContainer, [rowOneOfModalBody]);

  return { selectAllCheckBox, spanForCurrentTotalSize };
}

function createRowTwoOfModalBodyContainer() {
  const rowTwo = new CustomDiv();
  const rowTwoAttributes = {
    class: "container",
  };
  rowTwo.setAttribute(rowTwoAttributes);
  return rowTwo;
}

function addRowTwoToModalBodyContainer(records, modalBodyContainer) {
  const rowTwoOfModalBody = createRowTwoOfModalBodyContainer();
  const contentRowTwo = createRecordsCheckBox(records);

  addElementsToParentContainer(rowTwoOfModalBody, [contentRowTwo]);
  addElementsToParentContainer(modalBodyContainer, [rowTwoOfModalBody]);

  return { contentRowTwo };
}

function createModalBody(records, sizeLimitCanDownload) {
  const modalBodyContainer = createModalBodyContainer();

  const { selectAllCheckBox, spanForCurrentTotalSize } =
    addRowOneToModalBodyContainer(sizeLimitCanDownload, modalBodyContainer);

  const { contentRowTwo } = addRowTwoToModalBodyContainer(
    records,
    modalBodyContainer
  );

  return {
    modalBodyContainer,
    contentRowTwo,
    spanForCurrentTotalSize,
    selectAllCheckBox,
  };
}

export { createModalBody };
