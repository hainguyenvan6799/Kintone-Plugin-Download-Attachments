import { CustomLabel } from "Components/";

function createHeaderLabel() {
  const headerLabel = new CustomLabel();

  headerLabel.setInnerHTML("Bulk Download Attachments");

  return headerLabel;
}

export { createHeaderLabel };
