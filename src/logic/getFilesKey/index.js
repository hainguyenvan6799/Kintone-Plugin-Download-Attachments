import { getSpecificFileKey } from "../getSpecificFileKey";

// function getFileKeys(allRecords, fieldCode, listSelectedFileKey) {
//   let fileKeys = [];

//   fileKeys = allRecords.records
//     .filter((record) => record[fieldCode].value.length > 0)
//     .map((record) => {
//       const recordAttachments = record[fieldCode].value;
//       const recordTitle = record.Title
//         ? record.Title.value
//         : `Record ${record.Record_number.value}`;

//       return recordAttachments.map((recordAttachment) => {
//         return {
//           ...recordAttachment,
//           title: recordTitle,
//         };
//       });
//     })
//     .flat();

//   if (listSelectedFileKey) {
//     return getSpecificFileKey(fileKeys, listSelectedFileKey);
//   }

//   return fileKeys;
// }

function findAllValuesWithProp(object, keyName, arr = []) {
  if (object[keyName]) {
    arr.push(object);
  }
  for (let property in object) {
    object.hasOwnProperty(property) &&
      typeof object[property] === "object" &&
      findAllValuesWithProp(object[property], keyName, arr);
  }
  return arr;
}

function getFileKeys(allRecords, listSelectedFileKey) {
  let fileKeys = [];

  fileKeys = allRecords.records
    .map((record) => {
      const recordAttachments = findAllValuesWithProp(record, "fileKey");

      const recordTitle = record.Title
        ? record.Title.value
        : `Record ${record.Record_number.value}`;

      return recordAttachments.map((recordAttachment) => {
        return {
          ...recordAttachment,
          title: recordTitle,
        };
      });
    })
    .flat();

  if (listSelectedFileKey) {
    return getSpecificFileKey(fileKeys, listSelectedFileKey);
  }
  return fileKeys;
}

export { getFileKeys };
