import {CustomLabel} from 'Components/';
import {LABEL_TEXT} from 'Languages';

function createHeaderLabel() {
  const headerLabel = new CustomLabel();

  headerLabel.setInnerHTML(LABEL_TEXT('BULK_DOWNLOAD_ATTACHMENTS'));

  return headerLabel;
}

export {createHeaderLabel};
