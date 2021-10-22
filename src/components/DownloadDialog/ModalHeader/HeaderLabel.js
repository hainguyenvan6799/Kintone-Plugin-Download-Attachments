import {CustomLabel} from 'Components/';
import {LABEL, USER_LANGUAGE} from "Languages";

function createHeaderLabel() {
  const headerLabel = new CustomLabel();

  headerLabel.setInnerHTML(LABEL.BULK_DOWNLOAD_ATTACHMENTS[USER_LANGUAGE]);

  return headerLabel;
}

export {createHeaderLabel};
