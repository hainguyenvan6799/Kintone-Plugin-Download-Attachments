import BasicElement from 'Components/BasicElement';
import {BUTTON_TEXT} from 'Languages';

function ButtonSpinner(oldButton) {
  const newButton = oldButton;
  const loadingSpinner = new BasicElement('span');

  const loadingSpinnerAttributes = {
    class: 'spinner-border spinner-border-sm',
    role: 'status',
    'aria-hidden': 'true',
  };
  loadingSpinner.setAttribute(loadingSpinnerAttributes);

  newButton.setAttribute({
    disabled: 'disabled',
  });
  newButton.setInnerHTML(`${BUTTON_TEXT('DOWNLOADING')}... `);
  newButton.getElement().appendChild(loadingSpinner.getElement());

  return {buttonHaveLoadingSpinner: newButton, loadingSpinner};
}

export {ButtonSpinner};