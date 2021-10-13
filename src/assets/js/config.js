jQuery.noConflict();
(function ($, PLUGIN_ID) {
  "use strict";

  function validateSizeLimit(sizeLimit) {
    if (sizeLimit <= 0) {
      return false;
    }
    return true;
  }

  function settingPlugin(isEnableSelectRecordForAttachmentDownload, sizeLimit) {
    if (!validateSizeLimit($sizeLimit.val())) {
      alert("Size limit must be greater than 0.");
    } else {
      kintone.plugin.app.setConfig(
        {
          isEnableSelectRecordForAttachmentDownload,
          sizeLimit,
        },
        function () {
          alert("The plug-in settings have been saved. Please update the app!");
          window.location.href = "../../flow?app=" + kintone.app.getId();
        }
      );
    }
  }

  const $form = $(".js-submit-settings");
  $form.on("submit", function (e) {
    const $sizeLimit = $(".js-size-limit");
    const $isEnableSelectRecordForAttachmentDownload = $(
      '.js-submit-settings input[type="radio"][name="chooseEnableOption"]:checked'
    );
    e.preventDefault();

    settingPlugin(
      $isEnableSelectRecordForAttachmentDownload.val(),
      $sizeLimit.val()
    );
  });

  const $cancelButton = $(".js-cancel-button");
  $cancelButton.on("click", function () {
    window.location.href = "../../" + kintone.app.getId() + "/plugin/";
  });
})(jQuery, kintone.$PLUGIN_ID);
