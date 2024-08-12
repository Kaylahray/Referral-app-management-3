const activityButton = document.querySelector(".activityButton");
const summaryTable = document.querySelector(".activitySummaryTable");
const chatButton = document.querySelector(".chatButton");
const chatBox = document.querySelector(".chatContainer");
const chatMessageBox = document.querySelector(".inputOverallContainer");
const doneBtn = document.querySelector(".doneBtn");
const chatwrapper = document.querySelector(".chatwrapper");
const startAChat = document.querySelector(".startAChat");
const summaryBtnView = document.querySelector(".summaryBtnView")
let activeButton = "activity"; 

function changeStyles() {
    const activityButtonClass = activityButton.className;
    const chatButtonClass = chatButton.className;
    activityButton.className = chatButtonClass;
    chatButton.className = activityButtonClass;
}

function showChat() {
    if (activeButton !== "chat") {
        changeStyles();
        activeButton = "chat";
    }
    summaryTable.style.display = "none";
    chatBox.style.display = "flex";
    chatMessageBox.style.display = "block";
}

function showActivity() {
    if (activeButton !== "activity") {
        changeStyles();
        activeButton = "activity";
    }
    summaryTable.style.display = "block";
    chatBox.style.display = "none";
    chatMessageBox.style.display = "none";
}

function startChat() {
    chatwrapper.style.display = "flex";
    if (chatwrapper.style.display = "flex"){
        chatwrapper.addEventListener("click", function(){
            chatwrapper.style.display = "none"   
        })
    }
}

function completeChat() {
    chatwrapper.style.display = "none";
    showChat(); 
}

chatButton.onclick = showChat;
activityButton.onclick = showActivity;
startAChat.onclick = startChat;
doneBtn.onclick = completeChat;


summaryBtnView.onclick = function(){
    showChat();
}