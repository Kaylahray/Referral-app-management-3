// Get all img elements with class 'viewDropdownImg'
const images = document.querySelectorAll(".viewDropdownImg");

// Function to close all dropdowns
function closeAllDropdowns() {
  const allDropdowns = document.querySelectorAll(".ViewDropdown");
  allDropdowns.forEach((dropdown) => {
    dropdown.style.display = "none";
  });
}

images.forEach((img) => {
  img.addEventListener("click", function () {
    // Find the nearest parent 'td' element
    const parentTd = img.closest("td.viewDropdownP");
    if (parentTd) {
      // Find the 'ViewDropdown' div within the parent 'td'
      const dropdown = parentTd.querySelector(".ViewDropdown");
      if (dropdown) {
        // Check current display status of the dropdown
        const isDropdownVisible = dropdown.style.display === "flex";
        
        // Close all dropdowns
        closeAllDropdowns();

        // Toggle the clicked dropdown
        if (!isDropdownVisible) {
          dropdown.style.display = "flex";
        }
      }
    }
  });
});
