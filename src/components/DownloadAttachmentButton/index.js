import {CustomButton} from '..';
import {BUTTON_TEXT} from 'Languages';

function createDownloadAttachmentButton() {
  const buttonDownload = new CustomButton(BUTTON_TEXT('DOWNLOAD_ATTACHMENTS'));
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
