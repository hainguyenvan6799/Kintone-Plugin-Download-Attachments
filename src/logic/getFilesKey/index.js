function addRecordAttachmentsAndTitleToFileKeys(
  recordAttachments,
  fileKeys,
  recordTitle
) {
  for (var j = 0; j < recordAttachments.value.length; j++) {
    fileKeys.push({
      ...recordAttachments.value[j],
      title: recordTitle,
    });
  }
}

function getRecordAttachmentsAndTitle(allRecords, fieldCode, i) {
  const recordAttachments = allRecords.records[i][fieldCode];
  const recordTitle = allRecords.records[i]["Title"]
    ? allRecords.records[i]["Title"].value
    : `Record ${allRecords.records[i]["Record_number"].value}`;
  return { recordAttachments, recordTitle };
}

function getFileKeys(allRecords, fieldCode) {
  var fileKeys = [];
  for (var i = 0; i < allRecords.records.length; i++) {
    const { recordAttachments, recordTitle } = getRecordAttachmentsAndTitle(
      allRecords,
      fieldCode,
      i
    );
    // When multiple files are attached
    addRecordAttachmentsAndTitleToFileKeys(
      recordAttachments,
      fileKeys,
      recordTitle
    );
  }

  return fileKeys;
}

export { getFileKeys };
