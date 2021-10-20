import {addElementsToParentContainer} from '../../../utils';
import {createButtonCancel} from './ButtonCancel';
import {createButtonDownload} from './ButtonDownload';
import {createModalFooterContainer} from './ModalFooterContainer';

function createModalFooter() {
  const buttonCancel = createButtonCancel();
  const buttonDownload = createButtonDownload();
  const modalFooterContainer = createModalFooterContainer();

  addElementsToParentContainer(modalFooterContainer, [buttonCancel, buttonDownload]);

  return {modalFooterContainer, buttonCancel, buttonDownload};
}

export {createModalFooter};
