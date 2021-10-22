function downloadFile(zipTool, fileDownload, indexOfFile) {
  return new kintone.Promise((resolve, reject) => {
    JSZipUtils.getBinaryContent(fileDownload.blobUrl, (error, data) => {
      if (error) {
        reject(error);
      }
      const recordAttachments = zipTool.folder(fileDownload.title);

      recordAttachments.file(`${fileDownload.name}`, data, {
        binary: true,
      });

      resolve(data);
    });
  });
}

function downloadFiles(filesDownload, anotherZip) {
  const zipTool = anotherZip || new JSZip();

  return Promise.all(filesDownload.map((fileDownload, indexOfFile) => downloadFile(zipTool, fileDownload, indexOfFile)))
    .then(response => zipTool);
}

export {downloadFiles};
