import {CustomButton} from '..';
import {BUTTON, USER_LANGUAGE} from "Languages";

function createDownloadAttachmentButton() {
  const buttonDownload = new CustomButton(BUTTON.DOWNLOAD_ATTACHMENTS[USER_LANGUAGE]);
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
