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
  resetDisableButton,
} from "Utilities";
import { ButtonSpinner } from "Components/ButtonSpinner";

function handleAfterDownloadSuccess() {
  let successMessage = new Notification({
    text: "Download Completed.",
    type: "success",
    className: "options-class",
  });
  successMessage.open();

  const isDoneDownload = true;
  return { isDoneDownload, successMessage };
}

function handleDownloadFail(error) {
  let errorMessage;
  if (error?.type === "logic") {
    errorMessage = new Notification({
      text: error.message,
      type: "danger",
      className: "options-class",
    });
  } else {
    errorMessage = new Notification({
      text: "Errors occur during download.",
      type: "danger",
      className: "options-class",
    });
  }
  errorMessage.open();
  const isDoneDownload = true;

  return { isDoneDownload, errorMessage };
}

function closeAllNotifications(timeInMillisecons, notificationArray = []) {
  if (notificationArray.length > 0) {
    setTimeout(() => {
      notificationArray.forEach((notification) => notification?.close());
    }, timeInMillisecons);
  }
}

function downloadAttachments(
  config,
  listIds = null,
  listSelectedFileKey = null
) {
  const fieldCode = "Attachment";
  const isGuestSpace = false;
  let successMessage, errorMessage;
  const TIME_TO_CLOSE_NOTIFICATION = 5000;

  return getAppRecords(fieldCode, isGuestSpace, listIds)
    .then((allRecords) =>
      getFileKeys(allRecords, fieldCode, listSelectedFileKey)
    )
    .then((fileKeys) => checkFileSize(fileKeys, config.sizeLimit))
    .then((fileKeys) => addfileURLs(fileKeys, isGuestSpace))
    .then(downloadFiles)
    .then(doZipFile)
    .then(saveZipFile)
    .then((response) => {
      const { isDoneDownload, successMessage: successMessageAfterDownload } =
        handleAfterDownloadSuccess();
      successMessage = successMessageAfterDownload;
      return isDoneDownload;
    })
    .catch(function (error) {
      const { isDoneDownload, errorMessage: errorDownloadMessage } =
        handleDownloadFail(error);
      errorMessage = errorDownloadMessage;
      return isDoneDownload;
    })
    .finally(() =>
      closeAllNotifications(TIME_TO_CLOSE_NOTIFICATION, [
        successMessage,
        errorMessage,
      ])
    );
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

function handleClickDownloadInDialog(
  pluginConfig,
  downloadButtonInsideDialog,
  cancelButton
) {
  const valueOfCheckBoxAreChecked =
    getCheckBoxesAreCheckedWithName("selectRecord");
  const listIdsCheckBoxesAreChecked = valueOfCheckBoxAreChecked.map(
    (checkBox) => checkBox.recordId
  );

  const { updatedButton, loadingSpinner } = ButtonSpinner(
    downloadButtonInsideDialog
  );

  // Todo: check if error: disableButton(cancelButton);
  cancelButton.disable();

  downloadAttachments(pluginConfig, listIdsCheckBoxesAreChecked).then(
    (isDone) => {
      if (isDone) {
        resetDownloadButton(updatedButton, loadingSpinner);
        resetDisableButton(cancelButton);
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

function handleWhenClickCancelButton(headerSpace) {
  headerSpace.removeChild(headerSpace.lastElementChild);
}

function showSelectDownloadDialog(pluginConfig, headerSpace, recordsIndexView) {
  let totalSize = 0;

  const recordsHaveAttachments = recordsIndexView.filter(
    (record) => record.Attachment.value.length > 0
  );

  const {
    downloadModal,
    cancelButton,
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

  downloadButtonInsideDialog.addGlobalEventListener("click", () =>
    handleClickDownloadInDialog(
      pluginConfig,
      downloadButtonInsideDialog,
      cancelButton
    )
  );

  selectAllCheckBox.addGlobalEventListener("change", () => {
    totalSize = handleWhenChangeSelectAllCheckBox(
      pluginConfig,
      selectAllCheckBox,
      totalSize,
      downloadButtonInsideDialog,
      elementDisplayTotalSize
    );
  });

  contentRowTwoOfModalBody.addGlobalEventListener("change", (event) => {
    totalSize = handleWhenChangeSelectRecordCheckBox(
      event,
      pluginConfig,
      totalSize,
      downloadButtonInsideDialog,
      elementDisplayTotalSize
    );
  });

  fullScreenButton.addGlobalEventListener("click", () =>
    handleWhenClickFullScreenIcon(modalDialog)
  );

  cancelButton.addGlobalEventListener("click", () =>
    handleWhenClickCancelButton(headerSpace)
  );

  downloadModal.addSubElementToElement(headerSpace);
}

function downloadNow(pluginConfig, downloadButton) {
  const { updatedButton, loadingSpinner } =
    ButtonSpinner(downloadButton);

  downloadAttachments(pluginConfig).then((isDone) => {
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
  if (pluginConfig.activeAttachmentsSelection === "yes") {
    showSelectDownloadDialog(pluginConfig, headerSpace, recordsIndexView);
  } else {
    downloadNow(pluginConfig, downloadButton);
  }
}

export { handleClickDownloadButton };
