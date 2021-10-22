import {CustomButton} from 'Components/';
import {BUTTON, USER_LANGUAGE} from "Languages";

function createButtonCancel() {
  const buttonCancel = new CustomButton(BUTTON.CANCEL[USER_LANGUAGE]);

  const buttonCancelAttributes = {
    type: 'button',
    class: 'btn btn-danger',
    'data-dismiss': 'modal'
  };

  buttonCancel.setAttribute(buttonCancelAttributes);

  return buttonCancel;
}

export {createButtonCancel};