const activityButton = document.querySelector(".activityButton");
const summaryTable = document.querySelector(".activitySummaryTable");
const chatButton = document.querySelector(".chatButton");
const chatBox = document.querySelector(".chatContainer");
const chatMessageBox = document.querySelector(".inputOverallContainer");
 

function changeStyles() {
    const activityButtonClass = activityButton.className;
    const chatButtonClass = chatButton.className;

    activityButton.className = chatButtonClass;
    chatButton.className = activityButtonClass;
}

chatButton.onclick = function(){
    changeStyles()
    summaryTable.style.display = "none";
    chatBox.style.display = "flex";
    chatMessageBox.style.display = "block";    
}
activityButton.onclick = function(){
    changeStyles()
    summaryTable.style.display = "block";
    chatBox.style.display = "none";
    chatMessageBox.style.display = "none";
    
}
