import { getCheckBoxesAreCheckedWithName } from "../getCheckBoxesAreCheckedWithName";

function toggleDisableDownloadButton(groupName, buttonInstance) {
  const valueOfCheckBoxAreChecked = getCheckBoxesAreCheckedWithName(groupName);

  if (valueOfCheckBoxAreChecked.length === 0) {
    buttonInstance.setAttribute({
      disabled: "disabled",
    });
  } else {
    buttonInstance.getElement().removeAttribute("disabled");
  }
}

export { toggleDisableDownloadButton };
