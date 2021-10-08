function resetDownloadButton(updatedButton, loadingSpinner) {
    updatedButton.getElement().innerHTML = "Download Attachments";
    updatedButton.getElement().removeAttribute("disabled")
    loadingSpinner.getElement().remove();
}

export { resetDownloadButton };
