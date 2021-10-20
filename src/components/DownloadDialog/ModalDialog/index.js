import {CustomDiv} from 'Components/';

function createModalDialog() {
  const modalDialog = new CustomDiv();
  const modalDialogAttributes = {
    class: 'modal-dialog',
    role: 'document',
  };
  modalDialog.setAttribute(modalDialogAttributes);

  return modalDialog;
}

export {createModalDialog};