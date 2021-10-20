import {addFileURL} from 'Services/';

// function addfileURLs(fileKeys, isGuestSpace) {
//   return Promise.all(
//     fileKeys.map((fileKey) => addFileURL(fileKey, isGuestSpace))
//   );
// }

function addfileURLs(fileKeys) {
  return Promise.all(
    fileKeys.map((fileKey) => addFileURL(fileKey))
  );
}

export {addfileURLs};
