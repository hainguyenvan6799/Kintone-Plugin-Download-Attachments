function getCheckBoxesAreCheckedWithName(groupName) {
  const arrayContainCheckBoxesAreChecked = [];
  const checkBoxesAreChecked = document.getElementsByName(groupName);

  for (let i = 0; i < checkBoxesAreChecked.length; i++) {
    if (checkBoxesAreChecked[i].checked) {
      const valueCheckBoxInObject = JSON.parse(checkBoxesAreChecked[i].value);

      arrayContainCheckBoxesAreChecked.push(valueCheckBoxInObject);
    }
  }

  return arrayContainCheckBoxesAreChecked;
}
export { getCheckBoxesAreCheckedWithName };
