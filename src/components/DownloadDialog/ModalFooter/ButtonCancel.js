import {CustomButton} from 'Components/';
import {BUTTON_TEXT} from 'Languages';

function createButtonCancel() {
  const buttonCancel = new CustomButton(BUTTON_TEXT('CANCEL'));

  const buttonCancelAttributes = {
    type: 'button',
    class: 'btn btn-danger',
    'data-dismiss': 'modal'
  };

  buttonCancel.setAttribute(buttonCancelAttributes);

  return buttonCancel;
}

export {createButtonCancel};