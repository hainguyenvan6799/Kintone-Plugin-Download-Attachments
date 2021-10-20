import {CustomButton} from 'Components/';

function createButtonDownload() {
  const buttonDownload = new CustomButton('DOWNLOAD');

  const buttonDownloadAttributes = {
    type: 'button',
    class: 'btn btn-primary'
  };

  buttonDownload.setAttribute(buttonDownloadAttributes);

  return buttonDownload;
}

export {createButtonDownload};