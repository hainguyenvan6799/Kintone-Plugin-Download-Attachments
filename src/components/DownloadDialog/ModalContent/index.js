import {CustomDiv} from 'Components/';

function createModalContent() {
  const modalContent = new CustomDiv();
  const modalContentAttributes = {
    class: 'modal-content',
  };
  modalContent.setAttribute(modalContentAttributes);

  return modalContent;
}

export {createModalContent};
