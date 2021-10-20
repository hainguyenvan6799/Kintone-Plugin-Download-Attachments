import BasicElement from 'Components/BasicElement';

function createButtonFullScreen() {
  const buttonFullScreen = new BasicElement('i');

  const fullScreenAttributes = {
    class: 'bi bi-arrows-fullscreen float-right',
  };

  buttonFullScreen.setAttribute(fullScreenAttributes);

  return buttonFullScreen;
}

export {createButtonFullScreen};
