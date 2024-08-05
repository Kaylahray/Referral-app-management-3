if (typeof loadProspectUpload === "undefined") {
  const loadProspectUpload = () => {
    const createProspectBtn = document.getElementById(
      "createProspectBtn"
    );
    const successPopUpModal = document.querySelector(
      ".successpopupmodalcontainer"
    );

    createProspectBtn.onclick = function () {
      successPopUpModal.style.visibility = "visible";
    };
  };
  loadProspectUpload();
} else {
  loadProspectUpload();
}
