import {CustomButton} from '..';

function createDownloadAttachmentButton() {
  const buttonDownload = new CustomButton('Download Attachments');
  const buttonDownloadAttributes = {
    type: 'button',
    class: 'btn btn-primary',
    'data-toggle': 'modal',
    'data-target': '.bd-download-attachment-modal-lg',
  };
  buttonDownload.setAttribute(buttonDownloadAttributes);

  return buttonDownload;
}

export {createDownloadAttachmentButton};
