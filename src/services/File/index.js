// function addFileURL(fileKey, isGuestSpace) {
//   return new kintone.Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     const params = {
//       fileKey: fileKey.fileKey,
//     };
//     const url = kintone.api.urlForGet('/k/v1/file', params, isGuestSpace);
//     xhr.open('GET', url, true); // async
//     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//     xhr.responseType = 'blob';
//     xhr.onload = function() {
//       if (xhr.status === 200) {
//         const blob = new Blob([xhr.response]);
//         const wurl = window.URL || window.webkitURL;
//         const blobUrl = wurl.createObjectURL(blob);
//         fileKey.blobUrl = blobUrl; // Add URL to key record
//         resolve(fileKey);
//       } else {
//         reject(JSON.parse(xhr.response));
//       }
//     };
//     xhr.send();
//   });
// }

function addFileURL(fileKey) {
  return new kintone.Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const params = {
      fileKey: fileKey.fileKey,
    };
    const url = kintone.api.urlForGet('/k/v1/file', params);
    xhr.open('GET', url, true); // async
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.responseType = 'blob';
    xhr.onload = function() {
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response]);
        const wurl = window.URL || window.webkitURL;
        const blobUrl = wurl.createObjectURL(blob);
        fileKey.blobUrl = blobUrl; // Add URL to key record
        resolve(fileKey);
      } else {
        reject(JSON.parse(xhr.response));
      }
    };
    xhr.send();
  });
}

export {addFileURL};