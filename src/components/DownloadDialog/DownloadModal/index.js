import { CustomDiv } from "Components";

function createDownloadModal() {
  const downloadModal = new CustomDiv();
  const downloadModalAttributes = {
    class: "modal fade bd-download-attachment-modal-lg",
    id: "downloadAttachmentsModal",
    tabindex: "-1",
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true",
  };
  downloadModal.setAttribute(downloadModalAttributes);

  return downloadModal;
}

export { createDownloadModal };
