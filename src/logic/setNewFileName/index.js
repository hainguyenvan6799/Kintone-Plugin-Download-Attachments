function setNewFileName(fileKeys, propertyToCheck = 'name') {
  const fileNames = [];
  let newValues = [];

  if (fileKeys && propertyToCheck) {
    newValues = fileKeys.map(fileItem => {
      const [fileName, fileExtension] = fileItem[propertyToCheck].split('.');

      if (fileName && fileExtension) {
        const newFileName = generateNewFileName(fileName, fileNames);
        fileNames.push(newFileName);

        return {
          ...fileItem,
          name: newFileName + '.' + fileExtension
        };
      }
      return fileItem;
    });
  }

  return newValues;
}

function generateNewFileName(fileName, fileNames = []) {
  let newFileName = fileName,
    suffix = 1;
  while (fileNames.indexOf(newFileName) !== -1) {
    newFileName = `${fileName}(${suffix++})`;
  }
  return newFileName;
}

export {setNewFileName};