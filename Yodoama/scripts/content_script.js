(function(global) {
  "use strict";

  chrome.extension.sendRequest({}, function(res) {});

  var s = document.createElement('script');
  s.src = chrome.extension.getURL("scripts/main.js");

  (document.head||document.documentElement).appendChild(s);

})(this.self || global);
