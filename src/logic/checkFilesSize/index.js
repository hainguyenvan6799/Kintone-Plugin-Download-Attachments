import {calculateFilesSize} from '../calculateFilesSize';
import {ERROR} from 'Languages';

function checkFileSize(filekeys, sizeLimit) {
  if (filekeys.length === 0) {
    return kintone.Promise.reject(ERROR('DONT_HAVE_FILES_TO_DOWNLOAD'));
  }

  const totalSizeInMb = calculateFilesSize(filekeys);

  if (totalSizeInMb > sizeLimit) {
    return kintone.Promise.reject(ERROR('OVER_SIZE_LIMIT', sizeLimit));
  }

  return filekeys;
}

export {checkFileSize};
