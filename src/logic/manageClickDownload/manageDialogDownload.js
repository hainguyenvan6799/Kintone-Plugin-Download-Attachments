import { createDownloadAttachmentDialog } from "Components/DownloadDialog";
import {
  checkedAllCheckBoxWithName,
  getCheckBoxesAreCheckedWithName,
  getRecordsAttachmentsSize,
  warningBaseOnTotalSize,
} from "Logics";

class ManageDialogDownload {
  constructor(manageClickDownload) {
    this.manageClickDownload = manageClickDownload;
    this.showSelectDownloadDialog();
  }

  getRecordsHaveAttachments = () => {
    return this.manageClickDownload.recordsArray.filter(
      (recordObject) => recordObject.Attachment.value.length > 0
    );
  };

  doWarningBaseOnTotalSize(totalSize) {
    warningBaseOnTotalSize({
      totalSize,
      limitSize: this.manageClickDownload.config.sizeLimit,
      buttonInstance: this.buttonDownloadInDialog,
      elementDisplayTotalSize: this.elementDisplayTotalSize,
    });
  }

  initialDownloadDialogWithSelectAll() {
    const totalSize = getRecordsAttachmentsSize(this.recordsHaveAttachments);

    this.doWarningBaseOnTotalSize(totalSize);

    return totalSize;
  }

  handleClickDownloadInDialog() {
    const valueOfCheckBoxAreChecked =
      getCheckBoxesAreCheckedWithName("selectRecord");
    const listIdsCheckBoxesAreChecked = valueOfCheckBoxAreChecked.map(
      (checkBox) => checkBox.recordId
    );

    this.manageClickDownload.downloadNow(
      this.buttonDownloadInDialog,
      listIdsCheckBoxesAreChecked
    );
  }

  handleWhenChangeSelectAllCheckBox() {
    const allCheckBoxesValueArray = checkedAllCheckBoxWithName(
      this.checkboxSelectAll.getElement(),
      "selectRecord"
    );

    const newTotalSize = allCheckBoxesValueArray.reduce(
      (totalFileSize, checkBoxValue) =>
        totalFileSize + checkBoxValue.recordAttachmentSize,
      0
    );

    this.doWarningBaseOnTotalSize(newTotalSize);

    return newTotalSize;
  }

  handleWhenChangeSelectRecordCheckBox(event) {
    let newTotalSize = this.totalSize;
    if (event.target !== event.currentTarget) {
      const clickedCheckBoxValue = JSON.parse(event.target.value);
      const { recordAttachmentSize } = clickedCheckBoxValue;

      event.target.checked
        ? (newTotalSize += recordAttachmentSize)
        : (newTotalSize -= recordAttachmentSize);

      this.doWarningBaseOnTotalSize(newTotalSize);

      return newTotalSize;
    }
  }

  handleWhenClickFullScreenIcon() {
    this.modalDialog.setAttribute({
      class: "modal-dialog fullscreen",
    });
  }

  handleWhenClickCancelButton() {
    this.manageClickDownload.headerSpace.removeChild(
      this.manageClickDownload.headerSpace.lastElementChild
    );
  }

  listenAllElement() {
    this.buttonDownloadInDialog.addGlobalEventListener("click", () =>
      this.handleClickDownloadInDialog()
    );

    this.checkboxSelectAll.addGlobalEventListener("change", () => {
      this.totalSize = this.handleWhenChangeSelectAllCheckBox();
    });

    this.containerCheckBoxRecords.addGlobalEventListener("change", (event) => {
      this.totalSize = this.handleWhenChangeSelectRecordCheckBox(event);
    });

    this.buttonFullScreen.addGlobalEventListener("click", () =>
      this.handleWhenClickFullScreenIcon()
    );

    this.buttonCancel.addGlobalEventListener("click", () =>
      this.handleWhenClickCancelButton()
    );
  }

  showSelectDownloadDialog() {
    this.totalSize = 0;

    const recordsHaveAttachments = this.getRecordsHaveAttachments();
    const dialogElements = createDownloadAttachmentDialog(
      recordsHaveAttachments,
      this.manageClickDownload.config.sizeLimit
    );

    this.recordsHaveAttachments = recordsHaveAttachments;
    this.modalDownload = dialogElements.downloadModal || null || null;
    this.modalDialog = dialogElements.modalDialog || null;
    this.buttonDownloadInDialog = dialogElements.downloadButton || null;
    this.buttonCancel = dialogElements.cancelButton || null;
    this.buttonFullScreen = dialogElements.fullScreenButton || null;
    this.checkboxSelectAll = dialogElements.selectAllCheckBox || null;
    this.elementDisplayTotalSize =
      dialogElements.spanForCurrentTotalSize || null;
    this.containerCheckBoxRecords =
      dialogElements.contentRowTwoOfModalBody || null;

    this.totalSize = this.initialDownloadDialogWithSelectAll();

    this.listenAllElement();

    this.modalDownload.addSubElementToElement(this.manageClickDownload.headerSpace);
  }
}
export default ManageDialogDownload;
