import {convertKbToMb} from 'Utilities/';

function getRecordAttachmentsSize(record) {
  let recordAttachmentsSizeInKb = 0;
  record.Attachment.value.map((item) => {
    recordAttachmentsSizeInKb += parseInt(item.size, 10);
  });
  const recordAttachmentsSizeInMb = convertKbToMb(recordAttachmentsSizeInKb);
  return recordAttachmentsSizeInMb;
}

function getRecordsAttachmentsSize(records) {
  let recordsAttachmentsSizeInMb = 0;
  records.map((record) => {
    recordsAttachmentsSizeInMb += getRecordAttachmentsSize(record);
  });

  return recordsAttachmentsSizeInMb;
}

export {getRecordsAttachmentsSize, getRecordAttachmentsSize};
