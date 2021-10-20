function getCheckBoxesAreCheckedWithName(groupName) {
  const checkBoxesAreChecked = document.getElementsByName(groupName);

  return Array.from(checkBoxesAreChecked)
    .filter((checkBoxAreChecked) => checkBoxAreChecked.checked)
    .map((checkBoxAreChecked) => JSON.parse(checkBoxAreChecked.value));

}
export {getCheckBoxesAreCheckedWithName};
