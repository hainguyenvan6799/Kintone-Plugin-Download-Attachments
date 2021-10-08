import BasicElement from "Components/BasicElement";

function createFullScreenButton() {
  const fullScreenButton = new BasicElement("i");

  const fullScreenAttributes = {
    class: "bi bi-arrows-fullscreen float-right",
  };

  fullScreenButton.setAttribute(fullScreenAttributes);

  return fullScreenButton;
}

export { createFullScreenButton };
