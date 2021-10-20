import {CustomDiv} from 'Components/';

function createModalFooterContainer() {
  const modalFooterContainer = new CustomDiv();

  const modalFooterContainerAttributes = {
    class: 'modal-footer',
  };

  modalFooterContainer.setAttribute(modalFooterContainerAttributes);

  return modalFooterContainer;
}

export {createModalFooterContainer};