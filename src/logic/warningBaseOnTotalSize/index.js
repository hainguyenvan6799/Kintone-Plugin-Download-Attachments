function warningBaseOnTotalSize({
  totalSize,
  limitSize,
  buttonInstance,
  elementDisplayTotalSize,
}) {
  elementDisplayTotalSize.setInnerHTML(totalSize.toFixed(2));
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
