function checkAndGetTextByLanguage(targetObject, targetKey) {
  const USER_LANGUAGE = kintone.getLoginUser().language;
  return Object.prototype.hasOwnProperty.call(targetObject, targetKey)
    && Object.prototype.hasOwnProperty.call(targetObject[targetKey], USER_LANGUAGE)
    && targetObject[targetKey][USER_LANGUAGE];
}
export {checkAndGetTextByLanguage};
