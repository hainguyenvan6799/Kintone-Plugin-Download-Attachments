function setNewFileName(arrayObject, propertyToCheck) {
	const fileNames = [];
	const newValues = arrayObject.map(value => {
		let [fileName, fileExtension] = value[propertyToCheck].split(".");
		let newFileName = generateNewFileName(fileName, fileNames)
		fileNames.push(newFileName);

		return {
			...value,
			name: newFileName + "." + fileExtension
		};
	});
	return newValues;
}

function generateNewFileName(fileName, result) {
	let newFileName = fileName, suffix = 1;
		while (result.indexOf(newFileName) >= 0) {
			newFileName = `${fileName}(${suffix++})`;
		}
		return newFileName;
}

export {setNewFileName}