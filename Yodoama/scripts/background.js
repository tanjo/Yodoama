// content_script.js からリクエストを受け取り、アドレスバーにアイコンを表示する.
(function(global) {
  "use strict";

  chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    chrome.pageAction.show(sender.tab.id);

    sendResponse({});
  });

})(this.self || global));
