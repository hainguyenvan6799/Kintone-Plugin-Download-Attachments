const ERROR = {
  DONT_HAVE_FILES_TO_DOWNLOAD: {
    ja: '[JA]Don\'t have any files to download.',
    en: 'Don\'t have any files to download.',
    zh: '[ZH]Don\'t have any files to download.'
  },
  OVER_SIZE_LIMIT: function(sizeLimit) {
    return {
      ja: `[JA]Your estimated files size is over size limit ${sizeLimit}MB in setting plugin.`,
      en: `Your estimated files size is over size limit ${sizeLimit}MB in setting plugin.`,
      zh: `[ZH]Your estimated files size is over size limit ${sizeLimit}MB in setting plugin.`
    };
  },
  ERROR_DURING_DOWNLOAD: {
    ja: '[JA]Errors occur during download.',
    en: 'Errors occur during download.',
    zh: '[ZH]Errors occur during download.'
  }
};

export {ERROR};