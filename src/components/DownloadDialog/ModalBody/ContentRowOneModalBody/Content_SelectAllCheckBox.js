import {CustomDiv} from 'Components';
import {addElementsToParentContainer} from 'Utilities';
import {createCheckBoxDialog, createContainerCheckBoxAndLabel, createLabelCheckBoxDialog} from '../CheckBoxAndLabel';
import {LABEL_TEXT} from 'Languages';

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
    LABEL_TEXT('SELECT_ALL_RECORDS'),
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
