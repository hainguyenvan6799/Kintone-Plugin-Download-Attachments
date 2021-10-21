import {convertKbToMb} from 'Utilities/';

function getRecordAttachmentsSize(record) {
  let recordAttachmentsSizeInKb = 0;
  record.Attachment.value.map((item) => {
    recordAttachmentsSizeInKb += parseInt(item.size, 10);
    // todo: check
    return item;
  });
  const recordAttachmentsSizeInMb = convertKbToMb(recordAttachmentsSizeInKb);
  return recordAttachmentsSizeInMb;
}

function getRecordsAttachmentsSize(records) {
  let recordsAttachmentsSizeInMb = 0;
  records.map((record) => {
    recordsAttachmentsSizeInMb += getRecordAttachmentsSize(record);
    // todo: check
    return record;
  });

  return recordsAttachmentsSizeInMb;
}

export {getRecordsAttachmentsSize, getRecordAttachmentsSize};
