import BasicElement from 'Components/BasicElement';

function ButtonSpinner(oldButton) {
  // test
  const newButton = oldButton;
  // test
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
  newButton.setInnerHTML('DOWNLOADING... ');
  newButton.getElement().appendChild(loadingSpinner.getElement());

  return {buttonHaveLoadingSpinner: newButton, loadingSpinner};
}

export {ButtonSpinner};