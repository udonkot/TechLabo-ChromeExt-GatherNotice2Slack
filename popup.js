document.addEventListener("DOMContentLoaded", () => {

  // 入室ボタンイベント
  const inButton = document.getElementById("inButton");
  inButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "performAction" });
    });
  });
  
  // 退室ボタンイベント
  const outButton = document.getElementById("outButton");
  outButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "outAction" });
    });
  });

});
