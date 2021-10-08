jQuery.noConflict();
(function ($, PLUGIN_ID) {
  "use strict";

  var $form = $(".js-submit-settings");
  var $cancelButton = $(".js-cancel-button");

  var $sizeLimit = $(".js-size-limit");

  // var config = kintone.plugin.app.getConfig(PLUGIN_ID);

  // if (config.message) {
  //   $message.val(config.message);
  //   // $isEnableSelectRecordForAttachmentDownload.val(
  //   //   config.isEnableSelectRecordForAttachmentDownload
  //   // );
  //   // $sizeLimit.val(config.sizeLimit);
  // }

  function validateSizeLimit(sizeLimit) {
    if(sizeLimit <= 0) {
      return false;
    }
    return true;
  }

  function settingPlugin(isEnableSelectRecordForAttachmentDownload, sizeLimit) {
    if(!validateSizeLimit($sizeLimit.val())) {
      alert("Size limit must be greater than 0.");
    } else {
      kintone.plugin.app.setConfig(
        {
          isEnableSelectRecordForAttachmentDownload,
          sizeLimit
        },
        function () {
          alert("The plug-in settings have been saved. Please update the app!");
          window.location.href = "../../flow?app=" + kintone.app.getId();
        }
      );
    }
  }

  $form.on("submit", function (e) {
    var $isEnableSelectRecordForAttachmentDownload = $(
      '.js-submit-settings input[type="radio"][name="chooseEnableOption"]:checked'
    );
    e.preventDefault();
    
    settingPlugin($isEnableSelectRecordForAttachmentDownload.val(), $sizeLimit.val());
    
  });
  $cancelButton.on("click", function () {
    window.location.href = "../../" + kintone.app.getId() + "/plugin/";
  });
})(jQuery, kintone.$PLUGIN_ID);
