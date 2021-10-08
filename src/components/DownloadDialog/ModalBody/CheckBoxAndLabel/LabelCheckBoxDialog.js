import { CustomLabel } from "../../..";

function createLabelCheckBoxDialog(labelFor = "") {
  const labelObject = new CustomLabel();

  const labelObjectAttributes = {
    htmlFor: labelFor,
    class: "form-check-label"
  };

  labelObject.setAttribute(labelObjectAttributes);

  return labelObject;
}

export { createLabelCheckBoxDialog };
