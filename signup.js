// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {

    // Get the form elements
    const form = document.querySelector('.form-tab');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');
    
    // Validate form on submit
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission to allow validation

        let valid = true;

        // Validate Name field
        if (nameField.value.trim() === '') {
            alert('Name is required');
            valid = false;
        }

        // Validate Email field
        if (emailField.value.trim() === '') {
            alert('Email is required');
            valid = false;
        } else if (!validateEmail(emailField.value.trim())) {
            alert('Please enter a valid email address');
            valid = false;
        }

        // Validate Password field
        if (passwordField.value.trim() === '') {
            alert('Password is required');
            valid = false;
        } else if (passwordField.value.length < 6) {
            alert('Password must be at least 6 characters long');
            valid = false;
        }

        // Validate Confirm Password field
        if (confirmPasswordField.value.trim() === '') {
            alert('Please confirm your password');
            valid = false;
        } else if (confirmPasswordField.value !== passwordField.value) {
            alert('Passwords do not match');
            valid = false;
        }

        // If all fields are valid, submit the form
        if (valid) {
            form.submit();
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});
