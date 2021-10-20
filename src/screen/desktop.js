import {createDownloadAttachmentButton} from 'Components/DownloadAttachmentButton';
import {ManageClickDownload} from 'Logics';

jQuery.noConflict();

(function($, PLUGIN_ID) {
  kintone.events.on('app.record.index.show', (event) => {
    const config = kintone.plugin.app.getConfig(PLUGIN_ID);

    const headerSpace = kintone.app.getHeaderMenuSpaceElement();

    const buttonDownload = createDownloadAttachmentButton();

    buttonDownload.addSubElementToElement(headerSpace);

    // downloadButton
    //   .getElement()
    //   .addEventListener("click", () =>
    //     handleClickDownloadButton(
    //       config,
    //       downloadButton,
    //       headerSpace,
    //       event.records
    //     )
    //   );
    buttonDownload.addGlobalEventListener(
      'click',
      () =>
        new ManageClickDownload(config, headerSpace, buttonDownload, event.records)
    );
  });
})(jQuery, kintone.$PLUGIN_ID);
