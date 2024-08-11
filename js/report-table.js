if (typeof loadReportTable === "undefined") {
  const loadReportTable = () => {
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

    // Hide the report popup when clicking on it
    reportPopUp.onclick = function () {
      reportPopUp.style.visibility = "hidden";
    };

    // Show the success popup
    createReportPopUp.onclick = function () {
      successPopUp.style.visibility = "visible";
    };

    // Hide the success popup when clicking on createReportPopUp
    createReportPopUp.onclick = function () {
      if (successPopUp.style.visibility === "visible") {
        successPopUp.style.visibility = "hidden";
      } else {
        successPopUp.style.visibility = "visible";
      }
    };

   
    document.addEventListener("click", function (event) {
      if (
        reportPopUp.style.visibility === "visible" &&
        !reportPopUp.contains(event.target) &&
        !createREPORT.contains(event.target)
      ) {
        reportPopUp.style.visibility = "hidden";
      }
    });

    document.addEventListener("click", function (event) {
      if (
        successPopUp.style.visibility === "visible" &&
        !createReportPopUp.contains(event.target)
      ) {
        successPopUp.style.visibility = "hidden";
      }
    });
  };
  loadReportTable();
} else {
  loadReportTable();
}
