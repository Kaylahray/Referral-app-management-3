    const createREPORT = document.querySelector(".report-table-header-btn");
    const reportPopUp = document.querySelector(".reportoverlaycontent");
    const cancelReport = document.querySelector(".cancel");
    const createReportPopUp = document.querySelector(".create-report");
    const successPopUp = document.querySelector(".successpopupcontainer");
    const currentReportingOption  = document.querySelector(".currentReportingOption");
    const checkBoxInput = document.querySelector (".checkBoxInput");
    const scrollableContainer = document.querySelector(".scrollable-container");
    const reportSelectLinks = document.querySelector(".reportselect-links");
    const popUp = document.querySelector(".reportpop-up")
 
    //  checked box funtion

    checkBoxInput.addEventListener("change", () => {
      if (checkBoxInput.checked) {
        scrollableContainer.style.display = "none";
        reportSelectLinks.style.display = "none";
        currentReportingOption.style.display = "block";
      } else {
        scrollableContainer.style.display = "block";
        currentReportingOption.style.display = "none";
        reportSelectLinks.style.display = "flex"
      }
    });

    reportPopUp.addEventListener("click", () => {
      reportPopUp.style.visibility = "hidden"
    })
         
    


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

    popUp.addEventListener("click", (e) =>{
      e.stopPropagation();
      return;
    })



   
    
