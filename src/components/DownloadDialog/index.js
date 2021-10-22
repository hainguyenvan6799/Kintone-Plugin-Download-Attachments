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
  const {
    modalBodyContainer: modalBody,
    spanForCurrentTotalSize,
    selectAllCheckBox,
    contentRowTwo: contentRowTwoOfModalBody
  } = createModalBody(records, sizeLimitCanDownload);
  const {
    modalFooterContainer: modalFooter,
    buttonCancel,
    buttonDownload,
  } = createModalFooter();

  addElementsToParentContainer(modalContent, [modalHeader, modalBody, modalFooter]);

  addElementsToParentContainer(modalDialog, [modalContent]);

  addElementsToParentContainer(downloadModal, [modalDialog]);

  return {
    downloadModal,
    modalDialog,
    contentRowTwoOfModalBody,
    buttonFullScreen,
    buttonCancel,
    buttonDownload,
    spanForCurrentTotalSize,
    selectAllCheckBox
  };
}

export {createDownloadAttachmentDialog};
