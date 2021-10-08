import { CustomDiv } from "Components/";

function createModalHeaderContainer() {
  const modalHeaderContainer = new CustomDiv();

  const modalHeaderContainerAttributes = {
    class: "modal-header",
  };

  modalHeaderContainer.setAttribute(modalHeaderContainerAttributes);

  return modalHeaderContainer;
}

export { createModalHeaderContainer };