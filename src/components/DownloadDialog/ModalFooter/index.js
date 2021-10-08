import { addElementsToParentContainer } from "../../../utils";
import { createCancelButton } from "./CancelButton";
import { createDownloadButton } from "./DownloadButton";
import { createModalFooterContainer } from "./ModalFooterContainer";

function createModalFooter() {
  const cancelButton = createCancelButton();
  const downloadButton = createDownloadButton();
  const modalFooterContainer = createModalFooterContainer();

  addElementsToParentContainer(modalFooterContainer, [cancelButton, downloadButton])

  return { modalFooterContainer, cancelButton, downloadButton };
}

export { createModalFooter };
