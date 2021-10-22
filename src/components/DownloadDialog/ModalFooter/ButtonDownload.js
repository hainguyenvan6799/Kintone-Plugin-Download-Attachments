import {CustomButton} from 'Components/';
import {BUTTON, USER_LANGUAGE} from "Languages";

function createButtonDownload() {
  const buttonDownload = new CustomButton(BUTTON.DOWNLOAD[USER_LANGUAGE]);

  const buttonDownloadAttributes = {
    type: 'button',
    class: 'btn btn-primary'
  };

  buttonDownload.setAttribute(buttonDownloadAttributes);

  return buttonDownload;
}

export {createButtonDownload};