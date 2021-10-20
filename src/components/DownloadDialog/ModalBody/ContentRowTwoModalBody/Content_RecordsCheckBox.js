import {CustomDiv} from 'Components/';
import {getRecordAttachmentsSize} from 'Logics/';
import {addElementsToParentContainer} from 'Utilities/';
import {createCheckBoxDialog, createContainerCheckBoxAndLabel, createLabelCheckBoxDialog} from '../CheckBoxAndLabel';

function getCheckBoxValueInString(record) {
  const checkBoxValue = {
    recordId: record.$id.value,
    recordAttachmentSize: getRecordAttachmentsSize(record),
  };
  const checkBoxValueInString = JSON.stringify(checkBoxValue);

  return checkBoxValueInString;

}

function createRecordCheckBox(record) {

  const checkBoxValueInString = getCheckBoxValueInString(record);

  const recordCheckBox = createCheckBoxDialog(
    'selectRecord',
    `${record.Task.value}_${record.Record_number.value}`,
    checkBoxValueInString
  );
  const labelForRecordCheckBox = createLabelCheckBoxDialog(
    `${record.Task.value}_${record.Record_number.value}`
  );

  const containerRecordCheckBoxAndLabel = createContainerCheckBoxAndLabel(
    recordCheckBox,
    labelForRecordCheckBox,
    record.Task.value
  );

  const containerRecordCheckBoxAndLabelAttributes = {
    class: 'form-check border border-primary mb-2'
  };
  containerRecordCheckBoxAndLabel.setAttribute(containerRecordCheckBoxAndLabelAttributes);

  return containerRecordCheckBoxAndLabel;
}

function createRecordsCheckBox(records) {
  const containerRecordsCheckBox = new CustomDiv();

  records.map((record) => {
    const containerRecordCheckBoxAndLabel = createRecordCheckBox(record);

    addElementsToParentContainer(containerRecordsCheckBox, [containerRecordCheckBoxAndLabel]);
  });

  return containerRecordsCheckBox;
}

export {createRecordsCheckBox};
