    // Get all img elements with class 'viewDropdownImg'
    const images = document.querySelectorAll('.viewDropdownImg');
  
    images.forEach(img => {
      img.addEventListener('click', function() {
        // Find the nearest parent 'td' element
        const parentTd = img.closest('td.viewDropdownP');
        if (parentTd) {
          // Find the 'ViewDropdown' div within the parent 'td'
          const dropdown = parentTd.querySelector('.ViewDropdown');
          if (dropdown) {
       
       
            // Toggle the display property of the dropdown
            dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
          }
        }
      });
    });  