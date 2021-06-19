let user_signed_in = false;
let domain = "txb2021.duckdns.org";
let folder_1 = "http://"+domain+"/playvideo/";
let folder_2 = "http://"+domain+"/playvideo2/";
let folder_3 = "http://"+domain+"/playvideo3/";

function getPaper(query) {
  let newUrl_1 = folder_2 + query + "01.mp4"
  let newUrl_2 = folder_2 + query + "02.mp4"
  let newUrl_3 = folder_2 + query + "03.mp4"
  let newUrl_4 = folder_2 + query + "04.mp4"
  //chrome.tabs.create({ url: newUrl_1 })
  //chrome.tabs.create({ url: newUrl_2 })
  //chrome.tabs.create({ url: newUrl_3 })
  //chrome.tabs.create({ url: newUrl_4 })
  chrome.downloads.download({ url: newUrl_1 })
  chrome.downloads.download({ url: newUrl_2 })
  chrome.downloads.download({ url: newUrl_3 })
  chrome.downloads.download({ url: newUrl_4 })
}
function getPaper2(query) {
  let newUrl2_1 = folder_1 + query + "01.mp4"
  let newUrl2_2 = folder_1 + query + "02.mp4"
  let newUrl2_3 = folder_1 + query + "03.mp4"
  let newUrl2_4 = folder_1 + query + "04.mp4"
  //chrome.tabs.create({ url: newUrl2_1 })
  //chrome.tabs.create({ url: newUrl2_2 })
  //chrome.tabs.create({ url: newUrl2_3 })
  //chrome.tabs.create({ url: newUrl2_4 })
  chrome.downloads.download({ url: newUrl2_1 })
  chrome.downloads.download({ url: newUrl2_2 })
  chrome.downloads.download({ url: newUrl2_3 })
  chrome.downloads.download({ url: newUrl2_4 })
}
function getPaper3(query) {
  let newUrl3_1 = folder_3 + query + "01.mp4"
  let newUrl3_2 = folder_3 + query + "02.mp4"
  let newUrl3_3 = folder_3 + query + "03.mp4"
  let newUrl3_4 = folder_3 + query + "04.mp4"
  //chrome.tabs.create({ url: newUrl3_1 })
  //chrome.tabs.create({ url: newUrl3_2 })
  //chrome.tabs.create({ url: newUrl3_3 })
  //chrome.tabs.create({ url: newUrl3_4 })
  chrome.downloads.download({ url: newUrl3_1 })
  chrome.downloads.download({ url: newUrl3_2 })
  chrome.downloads.download({ url: newUrl3_3 })
  chrome.downloads.download({ url: newUrl3_4 })
}


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'is_user_signed_in') {
    sendResponse({
      message: 'success',
      payload: user_signed_in
    });
  } else if (request.message === 'sign_out') {
    user_signed_in = false;
    sendResponse({ message: 'success' });
    chrome.contextMenus.removeAll()       //登出移除所有選項
  } else if (request.message === 'sign_in') {
    user_signed_in = true;
    sendResponse({ message: 'success' });


    chrome.contextMenus.create({
      type: 'normal',
      title: '通道1 (推薦)',
      id: 'item01',
      contexts: ["selection"],
      documentUrlPatterns: ["http://*/tongshin/stucourses_brow.asp*"],
      onclick: function (info, tab) {
        getPaper(info.selectionText)
      }
    })
    chrome.contextMenus.create({
      type: 'normal',
      title: '通道2 (備用)',
      id: 'item02',
      contexts: ["selection"],
      documentUrlPatterns: ["http://*/tongshin/stucourses_brow.asp*"],
      onclick: function (info, tab) {
        getPaper2(info.selectionText)
      }
    })
    chrome.contextMenus.create({
      type: 'normal',
      title: '通道3 (新源)',
      id: 'item03',
      contexts: ["selection"],
      documentUrlPatterns: ["http://*/tongshin/stucourses_brow.asp*"],
      onclick: function (info, tab) {
        getPaper3(info.selectionText)
      }
    })


  }
  return true;
});