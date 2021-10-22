import {checkAndGetTextByLanguage} from '../userLanguage';

const BUTTON_TEXT = function(keyButton) {
  const buttonTextObject = {
    DOWNLOAD_ATTACHMENTS: {
      ja: '[JA]Download Attachments',
      en: 'Download Attachments',
      zh: '[ZH] Download Attachments'
    },
    CANCEL: {
      ja: '[JA]CANCEL',
      en: 'CANCEL',
      zh: '[ZH]CANCEL'
    },
    DOWNLOAD: {
      ja: '[JA]DOWNLOAD',
      en: 'DOWNLOAD',
      zh: '[ZH]DOWNLOAD'
    },
    DOWNLOADING: {
      ja: '[JA]DOWNLOADING',
      en: 'DOWNLOADING',
      zh: '[ZH]DOWNLOADING'
    }
  };
  return checkAndGetTextByLanguage(buttonTextObject, keyButton);
};

const LABEL_TEXT = function(keyLabel) {
  const labelTextObject = {
    BULK_DOWNLOAD_ATTACHMENTS: {
      ja: '[JA]Bulk Download Attachments',
      en: 'Bulk Download Attachments',
      zh: '[ZH]Bulk Download Attachments'
    },
    SELECT_ALL_RECORDS: {
      ja: '[JA]Select all records',
      en: 'Select all records',
      zh: '[ZH]Select all records'
    },
    TOTAL_AND_SIZE_LIMIT: {
      ja: '[JA]Total/Size limit: ',
      en: 'Total/Size limit: ',
      zh: '[ZH]Total/Size limit: '
    }
  };
  return checkAndGetTextByLanguage(labelTextObject, keyLabel);
};

export {BUTTON_TEXT, LABEL_TEXT};