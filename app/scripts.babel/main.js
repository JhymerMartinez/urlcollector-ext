'use strict';

chrome.browserAction.onClicked.addListener(() => {
  let viewTabUrl = chrome.extension.getURL('urls.build.html');
  chrome.tabs.create({ url: viewTabUrl });
});
