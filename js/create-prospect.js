onMounted(() => {
  const createProspectFormDiv = document.querySelector(
    ".createProspectFormDiv"
  );
  const bulkUploadSect = document.querySelector(".bulkUploadSect");

  function toggleSections() {
    if (this.value === "bulk") {
      createProspectFormDiv.style.display = "none";
      bulkUploadSect.style.display = "block";
    } else {
      createProspectFormDiv.style.display = "block";
      bulkUploadSect.style.display = "none";
    }
  }

  document.querySelectorAll("[name=upload]").forEach((radio) => {
    radio.addEventListener("change", toggleSections);
  });

  // Initialize the correct section based on the default selected radio button

  const fileInput = document.getElementById("attachDoc");

  fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const fileType = file.type;

      // Check if the selected file is an Excel file
      if (
        fileType === "application/vnd.ms-excel" ||
        fileType ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.name.endsWith(".csv") ||
        file.name.endsWith(".xlsx")
      ) {
        // Use your SPA's routing mechanism to navigate to another page/component
        navigateTo("targetPage"); // Replace with your actual navigation function
      } else {
        alert("Please select a valid CSV or XLSX file.");
      }
    }
  });

  // Example navigation function for a generic SPA
  function navigateTo(page) {
    // window.location = "/#/prospect/create-prospect-upload";
    document.querySelector("[prospect-uploaded]")?.click();
  }
});
