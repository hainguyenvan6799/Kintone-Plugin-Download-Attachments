import { CustomDiv } from "Components/";

function createModalBodyContainer() {
  const modalBodyContainer = new CustomDiv();

  const modalBodyContainerAttributes = {
    class: "modal-body",
  };

  modalBodyContainer.setAttribute(modalBodyContainerAttributes);

  return modalBodyContainer;
}

export { createModalBodyContainer };