function checkedAllCheckBoxWithName(element, groupName) {
  const arrayContainCheckBoxesAreChecked = [];
  console.log(element.checked);
  const subCheckBoxes = document.getElementsByName(groupName);

  for (let i = 0; i < subCheckBoxes.length; i++) {
    subCheckBoxes[i].checked = element.checked;

    if (subCheckBoxes[i].checked) {
      const valueOfSubCheckBox = JSON.parse(subCheckBoxes[i].value);
      arrayContainCheckBoxesAreChecked.push(valueOfSubCheckBox);
    }
  }
  return arrayContainCheckBoxesAreChecked;
}

export { checkedAllCheckBoxWithName };
