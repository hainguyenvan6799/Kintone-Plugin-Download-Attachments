import {createButtonFullScreen} from './ButtonFullScreen';
import {createModalHeaderContainer} from './ModalHeaderContainer';
import {createHeaderLabel} from './HeaderLabel';
import {addElementsToParentContainer} from 'Utilities/';

function createModalHeader() {
  const headerLabel = createHeaderLabel();
  const buttonFullScreen = createButtonFullScreen();
  const modalHeaderContainer = createModalHeaderContainer();

  addElementsToParentContainer(modalHeaderContainer, [headerLabel, buttonFullScreen]);

  return {modalHeaderContainer, buttonFullScreen};
}

export {createModalHeader};
