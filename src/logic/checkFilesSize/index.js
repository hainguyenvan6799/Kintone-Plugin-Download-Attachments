import { calculateFilesSize } from "../calculateFilesSize";

function checkFileSize(filekeys, sizeLimit) {
  if (filekeys.length === 0) {
    return kintone.Promise.reject({
      type: "logic",
      message: "Don't have any files to download.",
    });
  }

  const totalSizeInMb = calculateFilesSize(filekeys);

  if (totalSizeInMb > sizeLimit) {
    return kintone.Promise.reject(
      `Your estimated files size is over size limit ${sizeLimit}MB in setting plugin.`
    );
  }

  return filekeys;
}

export { checkFileSize };
