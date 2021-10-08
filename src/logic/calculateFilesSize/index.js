import { convertKbToMb } from "Utilities/";

function calculateFilesSize(filekeys) {
  var totalSizeInKb = 0;
  for (var i = 0; i < filekeys.length; i++) {
    totalSizeInKb += parseInt(filekeys[i]["size"], 10);
  }
  var totalSizeInMb = convertKbToMb(totalSizeInKb);
  return totalSizeInMb;
}

export {calculateFilesSize};