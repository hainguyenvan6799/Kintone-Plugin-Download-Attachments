import { CustomCheckBox } from "Components";

function createCheckBoxDialog(nameOfCheckBox, idOfCheckBox, valueOfCheckBox = "") {
  const checkBoxDownloadDialog = new CustomCheckBox();

  const checkBoxDownloadDialogAttributes = {
    type: "checkbox",
    name: nameOfCheckBox,
    id: idOfCheckBox,
    class: "form-check-input mt-3",
    value: valueOfCheckBox,
    checked: true
  };

  checkBoxDownloadDialog.setAttribute(checkBoxDownloadDialogAttributes);

  return checkBoxDownloadDialog;
}

export { createCheckBoxDialog };