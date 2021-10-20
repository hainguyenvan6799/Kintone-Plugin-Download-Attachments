function resetDownloadButton(buttonWasUpdated, loadingSpinner) {
  buttonWasUpdated.setInnerHTML('Download Attachments');
  buttonWasUpdated.toggleDisable(false);
  loadingSpinner.remove();
}

export {resetDownloadButton};
