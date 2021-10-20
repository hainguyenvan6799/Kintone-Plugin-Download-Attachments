import {createDownloadModal} from './DownloadModal';
import {createModalDialog} from './ModalDialog';
import {createModalContent} from './ModalContent';
import {createModalHeader} from './ModalHeader';
import {createModalBody} from './ModalBody';
import {createModalFooter} from './ModalFooter';
import {addElementsToParentContainer} from 'Utilities/';

function createDownloadAttachmentDialog(records, sizeLimitCanDownload) {
  const downloadModal = createDownloadModal();
  const modalDialog = createModalDialog();
  const modalContent = createModalContent();
  const {modalHeaderContainer: modalHeader, buttonFullScreen} =
    createModalHeader();
  const {modalBodyContainer: modalBody, spanForCurrentTotalSize, selectAllCheckBox, contentRowTwo: contentRowTwoOfModalBody} = createModalBody(records, sizeLimitCanDownload);
  const {
    modalFooterContainer: modalFooter,
    buttonCancel,
    buttonDownload,
  } = createModalFooter();

  addElementsToParentContainer(modalContent, [modalHeader, modalBody, modalFooter]);

  // ToDo: check if alternate fail
  // modalHeader.addSubElementToElement(modalContent.getElement());
  // modalBody.addSubElementToElement(modalContent.getElement());
  // modalFooter.addSubElementToElement(modalContent.getElement());

  addElementsToParentContainer(modalDialog, [modalContent]);
  // modalContent.addSubElementToElement(modalDialog.getElement());

  addElementsToParentContainer(downloadModal, [modalDialog]);
  // modalDialog.addSubElementToElement(downloadModal.getElement());

  return {downloadModal, modalDialog, contentRowTwoOfModalBody, buttonFullScreen, buttonCancel, buttonDownload, spanForCurrentTotalSize, selectAllCheckBox};
}

export {createDownloadAttachmentDialog};
