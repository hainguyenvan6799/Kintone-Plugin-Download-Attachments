import {CustomButton} from '..';

function createDownloadAttachmentButton() {
  const downloadButton = new CustomButton('Download Attachments');
  const downloadButtonAttributes = {
    type: 'button',
    class: 'btn btn-primary',
    'data-toggle': 'modal',
    'data-target': '.bd-download-attachment-modal-lg',
  };
  downloadButton.setAttribute(downloadButtonAttributes);

  return downloadButton;
}

export {createDownloadAttachmentButton};
