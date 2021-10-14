function convertKbToMb(numberInKb) {
  return numberInKb / Math.pow(1024, 2);
}

function convertMbToKb(numberInMb) {
  return numberInMb * Math.pow(1024, 2);
}

function doZipFile(zip) {
    return zip.generateAsync({ type: "blob" });
}

function saveZipFile(fileObject) {
    return saveAs(
      fileObject,
      `${formatCurrentDateTime("YYYY-MM-DD_HH:m:s")}.zip`
    );
}

function formatCurrentDateTime(dateTimeFormat) {
  return moment().format(dateTimeFormat);
}

function addElementsToParentContainer(
  parentContainer,
  subElementsOfParentContainer
) {
  subElementsOfParentContainer.map((subElement) => {
    subElement.addSubElementToElement(parentContainer.getElement());
  });
}

function disableButton(buttonInstance) {
  buttonInstance.setAttribute({
    disabled: "disabled"
  });
}

function resetDisableButton(buttonInstance) {
  buttonInstance.getElement().removeAttribute("disabled");
}

function checkValueExistInArray(targetValue, targetArray = []) {
  return targetArray.includes(targetValue);
}

export {
  convertKbToMb,
  convertMbToKb,
  doZipFile,
  saveZipFile,
  formatCurrentDateTime,
  addElementsToParentContainer,
  disableButton,
  resetDisableButton,
  checkValueExistInArray
};
