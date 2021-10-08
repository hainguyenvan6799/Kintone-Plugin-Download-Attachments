import BasicElement from "Components/BasicElement";

function updateToSpinnerButton(oldDownloadButton) {
    const loadingSpinner = new BasicElement("span");
  
    const loadingSpinnerAttributes = {
      class: "spinner-border spinner-border-sm",
      role: "status",
      "aria-hidden": "true",
    };
    loadingSpinner.setAttribute(loadingSpinnerAttributes);
  
    oldDownloadButton.setAttribute({
      disabled: "disabled",
    });
    oldDownloadButton.setInnerHTML("DOWNLOADING... ");
    oldDownloadButton.getElement().appendChild(loadingSpinner.getElement());
  
    return { updatedButton: oldDownloadButton, loadingSpinner };
  }
  
  export { updateToSpinnerButton };