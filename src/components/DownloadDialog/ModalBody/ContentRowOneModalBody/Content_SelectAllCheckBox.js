import {CustomDiv} from 'Components';
import {addElementsToParentContainer} from 'Utilities';
import {createCheckBoxDialog, createContainerCheckBoxAndLabel, createLabelCheckBoxDialog} from '../CheckBoxAndLabel';
import {LABEL, USER_LANGUAGE} from "Languages";

function createColumnContainSelectAllCheckBox() {
  const columnContainSelectAllCheckBox = new CustomDiv();
  const columnContainSelectAllCheckBoxAttributes = {
    class: 'col-5',
  };
  columnContainSelectAllCheckBox.setAttribute(
    columnContainSelectAllCheckBoxAttributes
  );

  return columnContainSelectAllCheckBox;
}

function createContentSelectAllCheckBoxAndLabelContainer() {
  const selectAllCheckBox = createCheckBoxDialog('selectAll', 'selectAll');
  const labelForSelectAllCheckBox = createLabelCheckBoxDialog('selectAll');

  const containerSelectAllCheckBoxAndLabel = createContainerCheckBoxAndLabel(
    selectAllCheckBox,
    labelForSelectAllCheckBox,
    LABEL.SELECT_ALL_RECORDS[USER_LANGUAGE],
  );

  return {containerSelectAllCheckBoxAndLabel, selectAllCheckBox};
}

function addContentToColumnContainSelectAllCheckBox(columnContainSelectAllCheckBox) {
  const {containerSelectAllCheckBoxAndLabel, selectAllCheckBox} = createContentSelectAllCheckBoxAndLabelContainer();
  addElementsToParentContainer(columnContainSelectAllCheckBox, [containerSelectAllCheckBoxAndLabel]);

  return {selectAllCheckBox};
}

function createSelectAllCheckBox() {

  const columnContainSelectAllCheckBox = createColumnContainSelectAllCheckBox();

  const {selectAllCheckBox} = addContentToColumnContainSelectAllCheckBox(columnContainSelectAllCheckBox);

  return {columnContainSelectAllCheckBox, selectAllCheckBox};
}

export {createSelectAllCheckBox};
