import {convertKbToMb} from 'Utilities/';

function calculateFilesSize(filekeys) {
  let totalSizeInKb = 0;
  for (let i = 0; i < filekeys.length; i++) {
    totalSizeInKb += parseInt(filekeys[i].size, 10);
  }
  const totalSizeInMb = convertKbToMb(totalSizeInKb);
  return totalSizeInMb;
}

export {calculateFilesSize};