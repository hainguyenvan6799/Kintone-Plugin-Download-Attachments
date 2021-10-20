import {CustomButton} from 'Components/';

function createButtonCancel() {
  const buttonCancel = new CustomButton('CANCEL');

  const buttonCancelAttributes = {
    type: 'button',
    class: 'btn btn-danger',
    'data-dismiss': 'modal'
  };

  buttonCancel.setAttribute(buttonCancelAttributes);

  return buttonCancel;
}

export {createButtonCancel};