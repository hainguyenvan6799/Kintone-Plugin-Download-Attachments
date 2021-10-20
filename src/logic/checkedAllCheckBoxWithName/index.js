function checkedAllCheckBoxWithName(selectAllElement, groupName) {
  const subCheckBoxes = document.getElementsByName(groupName);

  return Array.from(subCheckBoxes)
    .map((subCheckBox) => {
      subCheckBox.checked = selectAllElement.checked;
      const valueOfSubCheckBox =
        subCheckBox.checked && JSON.parse(subCheckBox.value);
      return valueOfSubCheckBox;
    })
    .filter((valueOfSubCheckBox) => valueOfSubCheckBox);
}

export {checkedAllCheckBoxWithName};
