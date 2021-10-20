import {ButtonSpinner} from 'Components/ButtonSpinner';
import {Notification} from 'kintone-ui-component';
import {addfileURLs, checkFileSize, downloadFiles, getFileKeys} from 'Logics';
import {getAppRecords} from 'Services';
import {doZipFile, saveZipFile} from 'Utilities';
import { setNewFileName } from '../setNewFileName';
import ManageDialogDownload from './manageDialogDownload';

class ManageClickDownload {
  constructor(pluginConfig, headerSpace, buttonDownload, recordsArray) {
    this.config = pluginConfig;
    this.headerSpace = headerSpace;
    this.buttonDownload = buttonDownload;
    this.recordsArray = recordsArray;
    this.TIME_TO_CLOSE_NOTIFICATION = 5000;

    if (this.config.activeAttachmentsSelection === 'yes') {
      this.manageDialogDownload = new ManageDialogDownload(this);
    } else {
      this.downloadNow(this.buttonDownload);
    }
  }

  handleAfterDownloadSuccess() {
    this.successMessage = new Notification({
      text: 'Download Completed.',
      type: 'success',
      className: 'options-class',
    });

    this.successMessage.open();

    this.closeNotifications(
      this.successMessage,
      this.TIME_TO_CLOSE_NOTIFICATION
    );
  }

  handleAfterDoneDownload(buttonInstance) {
    buttonInstance.setInnerHTML('Download Attachments');
    buttonInstance.toggleDisable(false);
    this.spinnerInButton.remove();
    this.manageDialogDownload &&
      this.manageDialogDownload.buttonCancel &&
      this.manageDialogDownload.buttonCancel.toggleDisable(false);
  }

  handleDownloadFail(error) {
    const errorMessage = error.message ? error.message : error;
    // 'Errors occur during download.'

    this.errorMessage = new Notification({
      text: errorMessage,
      type: 'danger',
      className: 'options-class',
    });

    this.errorMessage.open();
    this.closeNotifications(this.errorMessage, this.TIME_TO_CLOSE_NOTIFICATION);
  }

  closeNotifications(notificationElement, timeInMillisecons) {
    setTimeout(() => {
      notificationElement.close();
    }, timeInMillisecons);
  }

  // downloadAttachments(
  //   buttonInstance,
  //   listIds = null,
  //   listSelectedFileKey = null
  // ) {
  //   const fieldCode = 'Attachment';
  //   const isGuestSpace = false;

  //   return getAppRecords(fieldCode, isGuestSpace, listIds)
  //     .then((allRecords) =>
  //       getFileKeys(allRecords, fieldCode, listSelectedFileKey)
  //     )
  //     .then((fileKeys) => checkFileSize(fileKeys, this.config.sizeLimit))
  //     .then((fileKeys) => addfileURLs(fileKeys, isGuestSpace))
  //     .then(downloadFiles)
  //     .then(doZipFile)
  //     .then(saveZipFile)
  //     .then(() => this.handleAfterDownloadSuccess())
  //     .catch((error) => this.handleDownloadFail(error))
  //     .finally(() => this.handleAfterDoneDownload(buttonInstance));
  // }

  downloadAttachments(
    buttonInstance,
    listIds = null,
    listSelectedFileKey = null
  ) {

    return getAppRecords(listIds)
      .then((allRecords) =>
        getFileKeys(allRecords, listSelectedFileKey)
      )
      .then((fileKeys) => checkFileSize(fileKeys, this.config.sizeLimit))
      .then((fileKeys) => addfileURLs(fileKeys))
      .then((fileKeys) => setNewFileName(fileKeys, "name"))
      .then(downloadFiles)
      .then(doZipFile)
      .then(saveZipFile)
      .then(() => this.handleAfterDownloadSuccess())
      .catch((error) => this.handleDownloadFail(error))
      .finally(() => this.handleAfterDoneDownload(buttonInstance));
  }

  downloadNow(buttonInstance, listIdsCheckBoxesAreChecked = null) {
    const {buttonHaveLoadingSpinner, loadingSpinner} =
      ButtonSpinner(buttonInstance);

    buttonInstance = buttonHaveLoadingSpinner;
    this.spinnerInButton = loadingSpinner;
    this.manageDialogDownload &&
      this.manageDialogDownload.buttonCancel &&
      this.manageDialogDownload.buttonCancel.toggleDisable(true);

    this.downloadAttachments(buttonInstance, listIdsCheckBoxesAreChecked);
  }
}

export {ManageClickDownload};
