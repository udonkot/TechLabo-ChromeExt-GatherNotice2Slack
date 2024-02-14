chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  // 入室ボタンイベント
  if (request.action === "performAction") {
  
    // ユーザ名が取得できたらメッセージにセット
    const userName = document.getElementsByClassName("css-1n1bhhn")[0].innerHTML;
    let message = GATHER_IN_MESSAGE;
    if(userName !== undefined || userName !== "") {
      message = userName + "が" + message;
      
    }
    
    // slack通知
    const xhr = new XMLHttpRequest();
    xhr.open("POST","https://slack.com/api/chat.postMessage", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`token=${SLACK_API_TOKEN}&channel=${SLACK_CHANNEL_ID}&text=${message}`);
    
  }

  // 退室ボタンイベント
  if (request.action === "outAction") {

    // ユーザ名が取得できたらメッセージにセット
    const userName = document.getElementsByClassName("css-1n1bhhn")[0].innerHTML;
    let message = GATHER_OUT_MESSAGE;
    if(userName !== undefined || userName !== "") {
      message = userName + "が" + message;
    }

    // slack通知
    const xhr = new XMLHttpRequest();
    xhr.open("POST","https://slack.com/api/chat.postMessage", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`token=${SLACK_API_TOKEN}&channel=${SLACK_CHANNEL_ID}&text=${message}`);
  }

});
