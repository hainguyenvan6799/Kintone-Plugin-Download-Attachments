import {CustomButton} from 'Components/';
import {BUTTON_TEXT} from 'Languages';

function createButtonDownload() {
  const buttonDownload = new CustomButton(BUTTON_TEXT('DOWNLOAD'));

  const buttonDownloadAttributes = {
    type: 'button',
    class: 'btn btn-primary'
  };

  buttonDownload.setAttribute(buttonDownloadAttributes);

  return buttonDownload;
}

export {createButtonDownload};