import {CustomButton} from 'Components/';

function handleClickDownloadButton(downloadButton) {

}

function createDownloadButton() {
  const downloadButton = new CustomButton('DOWNLOAD');

  const downloadButtonAttributes = {
    type: 'button',
    class: 'btn btn-primary'
  };

  downloadButton.setAttribute(downloadButtonAttributes);

  return downloadButton;
}

export {createDownloadButton};