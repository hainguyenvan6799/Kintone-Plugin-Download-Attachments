function addDownloadedFileToFolderAndPackage(paramsObject) {
  const { error, data, resolve, reject, zipTool, fileName, recordTitle } =
    paramsObject;
  if (error) {
    reject(error);
  }
  var recordAttachments = zipTool.folder(recordTitle);
  recordAttachments.file(`${Date.now()}_${fileName}`, data, { binary: true });

  resolve(data);
}

function retrieveFilesDownloadFromUrls(zipTool, urlToDownload, fileName, recordTitle) {
  return new kintone.Promise(function (resolve, reject) {
    // getBinaryContent is an API that retrieves filesDownload from URLs asynchronously
    JSZipUtils.getBinaryContent(urlToDownload, (error, data) =>
      addDownloadedFileToFolderAndPackage({
        error,
        data,
        resolve,
        reject,
        zipTool,
        fileName,
        recordTitle,
      })
    );
  });
}

function downloadFiles(filesDownload, anotherZip, fileNum) {
  console.log("in download filesDownload");
  var zipTool = anotherZip || new JSZip();
  var indexOfFile = fileNum || 0;

  return retrieveFilesDownloadFromUrls(
    zipTool,
    filesDownload[indexOfFile]["blobUrl"],
    filesDownload[indexOfFile]["name"],
    filesDownload[indexOfFile]["title"]
  ).then(function (data) {
    indexOfFile++;
    if (indexOfFile === filesDownload.length) {
      return zipTool;
    }
    return downloadFiles(filesDownload, zipTool, indexOfFile);
  });
}

export { downloadFiles };
