const ERROR = {
  DONT_HAVE_FILES_TO_DOWNLOAD: {
    ja: '',
    en: 'Don\'t have any files to download.',
    zh: ''
  },
  OVER_SIZE_LIMIT: function(sizeLimit) {
    return {
      ja: '',
      en: `Your estimated files size is over size limit ${sizeLimit}MB in setting plugin.`,
      zh: ''
    };
  },
  ERROR_DURING_DOWNLOAD: {
    ja: '',
    en: 'Errors occur during download.',
    zh: ''
  }
};

export {ERROR};