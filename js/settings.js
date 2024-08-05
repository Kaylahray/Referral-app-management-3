console.log('settings.js loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const accountSettings = document.getElementById('account-settings');
    const changePassword = document.getElementById('change-password');
    const notificationSettings = document.getElementById('notification-settings');
    const changePasswordForm = document.getElementById('change-password-form');

    if (accountSettings) {
        console.log('account-settings element found');
    } else {
        console.log('account-settings element NOT found');
    }

    if (changePassword) {
        console.log('change-password element found');
    } else {
        console.log('change-password element NOT found');
    }

    if (notificationSettings) {
        console.log('notification-settings element found');
    } else {
        console.log('notification-settings element NOT found');
    }

    if (changePasswordForm) {
        console.log('change-password-form element found');
    } else {
        console.log('change-password-form element NOT found');
    }

    // Initially hide all forms
    function hideAllForms() {
        console.log('Hiding all forms');
        if (changePasswordForm) {
            changePasswordForm.style.display = 'none';
        }
        // Add similar checks and hiding logic for other forms if they exist
    }

    hideAllForms(); // Hide forms initially

    if (accountSettings) {
        console.log('Adding click event listener to account settings');
        accountSettings.addEventListener('click', function() {
            console.log('Account Settings clicked');
            hideAllForms();
            // Show account settings form if it exists
        });
    }

    if (changePassword) {
        console.log('Adding click event listener to change password');
        changePassword.addEventListener('click', function() {
            console.log('Change Password clicked');
            hideAllForms();
            if (changePasswordForm) {
                changePasswordForm.style.display = 'block';
            }
        });
    }

    if (notificationSettings) {
        console.log('Adding click event listener to notification settings');
        notificationSettings.addEventListener('click', function() {
            console.log('Notification Settings clicked');
            hideAllForms();
            // Show notification settings form if it exists
        });
    }
});
