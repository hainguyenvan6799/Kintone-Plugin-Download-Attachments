import {getSpecificFileKey} from '../getSpecificFileKey';
import {setNewFileName} from '../setNewFileName';

// get object has "fikeKey"
function findAllValuesWithProp(object, keyName, arr = []) {
  if (object && object[keyName]) {
    arr.push(object);
  }

  for (const property in object) {
    Object.prototype.hasOwnProperty.call(object, property) &&
      typeof object[property] === 'object' &&
      findAllValuesWithProp(object[property], keyName, arr);
  }
  return arr;
}

function getFileKeys(allRecords, listSelectedFileKey) {
  let fileKeys = [];

  fileKeys = allRecords.records
    .map((record) => {
      const recordAttachments = findAllValuesWithProp(record, 'fileKey');

      const recordTitle = record.Title
        ? record.Title.value
        : `Record ${record.Record_number.value}`;

      const newRecordAttachments = recordAttachments.map((recordAttachment) => {
        return {
          ...recordAttachment,
          title: recordTitle,
        };
      });

      return setNewFileName(newRecordAttachments);
    })
    .flat();

  if (listSelectedFileKey) {
    return getSpecificFileKey(fileKeys, listSelectedFileKey);
  }

  return fileKeys;
}

export {getFileKeys};
