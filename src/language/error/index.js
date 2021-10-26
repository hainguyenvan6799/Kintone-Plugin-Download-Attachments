import {checkAndGetTextByLanguage} from '../userLanguage';

const ERROR = function(keyError, externalText) {
  const errorObject = {
    DONT_HAVE_FILES_TO_DOWNLOAD: {
      ja: '[JA]Don\'t have any files to download.',
      en: 'Don\'t have any files to download.',
      zh: '[ZH]Don\'t have any files to download.'
    },
    OVER_SIZE_LIMIT: {
      ja: `[JA]Your estimated files size is over size limit ${externalText}MB in setting plugin.`,
      en: `Your estimated files size is over size limit ${externalText}MB in setting plugin.`,
      zh: `[ZH]Your estimated files size is over size limit ${externalText}MB in setting plugin.`
    },
    ERROR_DURING_DOWNLOAD: {
      ja: '[JA]Errors occur during download.',
      en: 'Errors occur during download.',
      zh: '[ZH]Errors occur during download.'
    },
  };
  return checkAndGetTextByLanguage(errorObject, keyError);

};

export {ERROR};