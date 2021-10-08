import { Notification } from "kintone-ui-component";

import { createDownloadAttachmentDialog } from "Components/DownloadDialog";

import {
  addfileURLs,
  checkedAllCheckBoxWithName,
  checkFileSize,
  downloadFiles,
  getCheckBoxesAreCheckedWithName,
  getFileKeys,
  getRecordsAttachmentsSize,
  resetDownloadButton,
  warningBaseOnTotalSize,
} from "..";
import { getAppRecords } from "Services";

import {
  doZipFile,
  saveZipFile,
} from "Utilities";
import { updateToSpinnerButton } from "Components/SpinnerButton";

function handleDownloadAttachments(config, listIds = null) {
  const fieldCode = "Attachment";
  const isGuestSpace = false;

  return getAppRecords(fieldCode, isGuestSpace, listIds)
    .then((allRecords) => getFileKeys(allRecords, fieldCode))
    .then((fileKeys) => checkFileSize(fileKeys, config.sizeLimit))
    .then((fileKeys) => addfileURLs(fileKeys, isGuestSpace))
    .then(downloadFiles)
    .then(doZipFile)
    .then(saveZipFile)
    .then((response) => {
      const successMessage = new Notification({
        text: "Download Completed.",
        type: "success",
        className: "options-class",
      });
      successMessage.open();

      const isDoneDownload = true;
      return isDoneDownload;
    })
    .catch(function (error) {
      const errorMessage = new Notification({
        text: error,
        type: "danger",
        className: "options-class",
      });
      errorMessage.open();
      const isDoneDownload = true;
      return isDoneDownload;
    });
}

function initialDownloadDialogWithSelectAll({
  recordsHaveAttachments,
  config,
  downloadButtonInsideDialog,
  elementDisplayTotalSize,
}) {
  const totalSize = getRecordsAttachmentsSize(recordsHaveAttachments);

  warningBaseOnTotalSize({
    totalSize,
    limitSize: config.sizeLimit,
    buttonInstance: downloadButtonInsideDialog,
    elementDisplayTotalSize,
  });

  return totalSize;
}

function handleWhenClickDownloadButtonInsideDialog(
  pluginConfig,
  downloadButtonInsideDialog
) {
  const valueOfCheckBoxAreChecked =
    getCheckBoxesAreCheckedWithName("selectRecord");
  const listIdsCheckBoxesAreChecked = valueOfCheckBoxAreChecked.map(
    (checkBox) => checkBox.recordId
  );

  const { updatedButton, loadingSpinner } = updateToSpinnerButton(
    downloadButtonInsideDialog
  );

  handleDownloadAttachments(pluginConfig, listIdsCheckBoxesAreChecked).then(
    (isDone) => {
      if (isDone) {
        resetDownloadButton(updatedButton, loadingSpinner);
      }
    }
  );
}

function handleWhenChangeSelectAllCheckBox(
  pluginConfig,
  selectAllCheckBox,
  totalSize,
  downloadButtonInsideDialog,
  elementDisplayTotalSize
) {
  const allCheckBoxesValueArray = checkedAllCheckBoxWithName(
    selectAllCheckBox.getElement(),
    "selectRecord"
  );

  totalSize = allCheckBoxesValueArray.reduce(
    (totalFileSize, checkBoxValue) =>
      totalFileSize + checkBoxValue.recordAttachmentSize,
    0
  );

  warningBaseOnTotalSize({
    totalSize,
    limitSize: pluginConfig.sizeLimit,
    buttonInstance: downloadButtonInsideDialog,
    elementDisplayTotalSize,
  });

  return totalSize;
}

function handleWhenChangeSelectRecordCheckBox(
  event,
  pluginConfig,
  totalSize,
  downloadButtonInsideDialog,
  elementDisplayTotalSize
) {
  if (event.target !== event.currentTarget) {
    const clickedCheckBoxValue = JSON.parse(event.target.value);
    const { recordAttachmentSize } = clickedCheckBoxValue;

    event.target.checked
      ? (totalSize += recordAttachmentSize)
      : (totalSize -= recordAttachmentSize);

    warningBaseOnTotalSize({
      totalSize,
      limitSize: pluginConfig.sizeLimit,
      buttonInstance: downloadButtonInsideDialog,
      elementDisplayTotalSize,
    });

    return totalSize;
  }
}

function handleWhenClickFullScreenIcon(modalDialog) {
  modalDialog.setAttribute({
    class: "modal-dialog fullscreen",
  });
}

function handleIfEnableSelectedRecord(
  pluginConfig,
  headerSpace,
  recordsIndexView
) {
  let totalSize = 0;

  const recordsHaveAttachments = recordsIndexView.filter(
    (record) => record["Attachment"].value.length > 0
  );

  const {
    downloadModal,
    modalDialog,
    downloadButton: downloadButtonInsideDialog,
    fullScreenButton,
    selectAllCheckBox,
    spanForCurrentTotalSize: elementDisplayTotalSize,
    contentRowTwoOfModalBody,
  } = createDownloadAttachmentDialog(
    recordsHaveAttachments,
    pluginConfig.sizeLimit
  );

  totalSize = initialDownloadDialogWithSelectAll({
    recordsHaveAttachments,
    config: pluginConfig,
    downloadButtonInsideDialog,
    elementDisplayTotalSize,
  });

  downloadButtonInsideDialog
    .getElement()
    .addEventListener("click", () =>
      handleWhenClickDownloadButtonInsideDialog(
        pluginConfig,
        downloadButtonInsideDialog
      )
    );

  selectAllCheckBox.getElement().addEventListener("change", () => {
    totalSize = handleWhenChangeSelectAllCheckBox(
      pluginConfig,
      selectAllCheckBox,
      totalSize,
      downloadButtonInsideDialog,
      elementDisplayTotalSize
    );
  });

  contentRowTwoOfModalBody.getElement().addEventListener("change", (event) => {
    totalSize = handleWhenChangeSelectRecordCheckBox(
      event,
      pluginConfig,
      totalSize,
      downloadButtonInsideDialog,
      elementDisplayTotalSize
    );
  });

  fullScreenButton
    .getElement()
    .addEventListener("click", () =>
      handleWhenClickFullScreenIcon(modalDialog)
    );

  downloadModal.addSubElementToElement(headerSpace);
}

function handleIfDontEnaleSelectRecord(pluginConfig, downloadButton) {
  const { updatedButton, loadingSpinner } =
    updateToSpinnerButton(downloadButton);

  handleDownloadAttachments(pluginConfig).then((isDone) => {
    if (isDone) {
      resetDownloadButton(updatedButton, loadingSpinner);
    }
  });
}

function handleClickDownloadButton(
  pluginConfig,
  downloadButton,
  headerSpace,
  recordsIndexView
) {
  if (pluginConfig.isEnableSelectRecordForAttachmentDownload === "yes") {
    handleIfEnableSelectedRecord(pluginConfig, headerSpace, recordsIndexView);
  } else {
    handleIfDontEnaleSelectRecord(pluginConfig, downloadButton);
  }
}

export { handleClickDownloadButton };
