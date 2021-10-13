import { addFileURL } from "Services/";

function recursiveAddFileUrls(
  fileKeys,
  increasingKeyNum,
  addfileURLs,
  isGuestSpace
) {
  increasingKeyNum++;
  if (increasingKeyNum === fileKeys.length) {
    return fileKeys;
  }
  return addfileURLs(fileKeys, isGuestSpace, increasingKeyNum);
}

function addfileURLs(fileKeys, isGuestSpace, keyNum) {
    let increasingKeyNum = keyNum || 0;
    return addFileURL(fileKeys[increasingKeyNum], isGuestSpace).then(() =>
      recursiveAddFileUrls(
        fileKeys,
        increasingKeyNum,
        addfileURLs,
        isGuestSpace
      )
    );
}

export { addfileURLs };
