    const createREPORT = document.querySelector(".report-table-header-btn");
    const reportPopUp = document.querySelector(".reportoverlaycontent");
    const cancelReport = document.querySelector(".cancel");
    const createReportPopUp = document.querySelector(".create-report");
    const successPopUp = document.querySelector(".successpopupcontainer");

    // Show the report popup
    createREPORT.onclick = function () {
      reportPopUp.style.visibility = "visible";
    };

    // Hide the report popup when the cancel button is clicked
    cancelReport.onclick = function () {
      reportPopUp.style.visibility = "hidden";
    };


    // Show the success popup
    createReportPopUp.onclick = function () {
      successPopUp.style.visibility = "visible";
    };



   
    
