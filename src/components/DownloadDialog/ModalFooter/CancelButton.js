import {CustomButton} from 'Components/';

function createCancelButton() {
  const cancelButton = new CustomButton('CANCEL');

  const cancelButtonAttributes = {
    type: 'button',
    class: 'btn btn-danger',
    'data-dismiss': 'modal'
  };

  cancelButton.setAttribute(cancelButtonAttributes);

  return cancelButton;
}

export {createCancelButton};