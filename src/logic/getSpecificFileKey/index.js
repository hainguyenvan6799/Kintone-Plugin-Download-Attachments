import { checkValueExistInArray } from "Utilities"

function getSpecificFileKey(fileKeys, listSelectedFileKey) {
    return fileKeys.filter(fileKey => checkValueExistInArray(fileKey.fileKey, listSelectedFileKey));
}

export {getSpecificFileKey}