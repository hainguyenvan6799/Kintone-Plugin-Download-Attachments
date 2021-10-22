import {checkAndGetTextByLanguage} from '../userLanguage';

const MESSAGE = function(keyMessage) {
  const messageObject = {
    DOWNLOAD_COMPLETED: {
      ja: '[JA]Download Completed.',
      en: 'Download Completed.',
      zh: '[ZH]Download Completed.'
    }
  };
  return checkAndGetTextByLanguage(messageObject, keyMessage);
};
export {MESSAGE};