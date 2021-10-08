function addFileURL(fileKey, isGuestSpace) {
    return new kintone.Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      var params = {
        fileKey: fileKey["fileKey"],
      };
      var url = kintone.api.urlForGet("/k/v1/file", params, isGuestSpace);
      xhr.open("GET", url, true); //async
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.responseType = "blob";
      xhr.onload = function () {
        if (xhr.status === 200) {
          var blob = new Blob([xhr.response]);
          var wurl = window.URL || window.webkitURL;
          var blobUrl = wurl.createObjectURL(blob);
          fileKey["blobUrl"] = blobUrl; // Add URL to key record
          resolve(fileKey);
        } else {
          reject(JSON.parse(xhr.response));
        }
      };
      xhr.send();
    });
}

export {addFileURL};