import {createFullScreenButton} from './FullScreenButton';
import {createModalHeaderContainer} from './ModalHeaderContainer';
import {createHeaderLabel} from './HeaderLabel';
import {addElementsToParentContainer} from 'Utilities/';

function createModalHeader() {
  const headerLabel = createHeaderLabel();
  const fullScreenButton = createFullScreenButton();
  const modalHeaderContainer = createModalHeaderContainer();

  addElementsToParentContainer(modalHeaderContainer, [headerLabel, fullScreenButton]);

  return {modalHeaderContainer, fullScreenButton};
}

export {createModalHeader};
