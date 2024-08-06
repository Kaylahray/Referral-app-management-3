document.addEventListener("DOMContentLoaded", function () {
    const settingsOptions = document.querySelectorAll(".settings-option");
    const contentSections = document.querySelectorAll(".content-section");
  
    settingsOptions.forEach((option) => {
      option.addEventListener("click", function () {
        console.log("Option clicked:", this.id);
  
        // Remove 'active' class from all options
        settingsOptions.forEach((opt) => opt.classList.remove("active"));
  
        // Hide all content sections
        contentSections.forEach((section) => (section.style.display = "none"));
  
        // Add 'active' class to the clicked option
        this.classList.add("active");
  
        // Display the corresponding content section
        const contentClass = `${this.id}-content`;
        const contentSection = document.querySelector(`.${contentClass}`);
        console.log("Content section:", contentSection);
  
        if (contentSection) {
          contentSection.style.display = "block";
        } else {
          console.error(`Content section with class ${contentClass} not found.`);
        }
      });
    });
  });
  