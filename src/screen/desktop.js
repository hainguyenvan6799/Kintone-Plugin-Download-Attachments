import { createDownloadAttachmentButton } from "Components/DownloadAttachmentButton";
import { handleClickDownloadButton } from "Logics/actionsWhenClickDownload";

jQuery.noConflict();

(function ($, PLUGIN_ID) {

  kintone.events.on("app.record.index.show", function (event) {
    var config = kintone.plugin.app.getConfig(PLUGIN_ID);

    const headerSpace = kintone.app.getHeaderMenuSpaceElement();

    const downloadButton = createDownloadAttachmentButton();

    downloadButton.addSubElementToElement(headerSpace);

    downloadButton
      .getElement()
      .addEventListener("click", () =>
        handleClickDownloadButton(
          config,
          downloadButton,
          headerSpace,
          event.records
        )
      );

    $(".modal").on('hidden.bs.modal', function (e) {
      headerSpace.removeChild(headerSpace.childNodes[1]);
    })
  });
})(jQuery, kintone.$PLUGIN_ID);
