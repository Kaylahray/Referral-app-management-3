if (typeof loadReportTable === "undefined") {
  const loadReportTable = () => {
    const createREPORT = document.querySelector(
      ".report-table-header-btn"
    );
    const reportPopUp = document.querySelector(
      ".reportoverlaycontent"
    );
    const cancelReport = document.querySelector(".cancel");
    const createReportPopUp =
      document.querySelector(".create-report");
    const successPopUp = document.querySelector(
      ".successpopupcontainer"
    );

    createREPORT.onclick = function () {
      reportPopUp.style.visibility = "visible";
    };
    cancelReport.onclick = function () {
      reportPopUp.style.visibility = "hidden";
    };
    createReportPopUp.onclick = function () {
      successPopUp.style.visibility = "visible";
    };
  };
  loadReportTable();
} else {
  loadReportTable();
}
