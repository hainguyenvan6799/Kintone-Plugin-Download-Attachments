import { convertMbToKb } from "Utilities";

function setTotalSizeToElement(elementDisplayTotalSize, totalSize) {
  if(totalSize < 0.1) {
    let totalSizeInKb = convertMbToKb(totalSize);
    elementDisplayTotalSize.setInnerHTML(`${totalSizeInKb.toFixed(2)} KB`);
  } else {
    elementDisplayTotalSize.setInnerHTML(`${totalSize.toFixed(2)} MB`);
  }
}

function warningBaseOnTotalSize({
  totalSize,
  limitSize,
  buttonInstance,
  elementDisplayTotalSize,
}) {
  setTotalSizeToElement(elementDisplayTotalSize, totalSize);
  if (totalSize === 0) {
    elementDisplayTotalSize.getElement().removeAttribute("class");
    buttonInstance.setAttribute({
      disabled: "disabled",
    });
  } else if (totalSize > limitSize) {
    elementDisplayTotalSize.setAttribute({
      class: "text-danger",
    });
    buttonInstance.setAttribute({
      disabled: "disabled",
    });
  } else {
    elementDisplayTotalSize.getElement().removeAttribute("class");
    buttonInstance.getElement().removeAttribute("disabled");
  }
}

export { warningBaseOnTotalSize };
