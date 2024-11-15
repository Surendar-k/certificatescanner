document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-tab');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirm-password');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let valid = true;

        // Validate Name
        if (nameField.value.trim() === '') {
            alert('Name is required');
            valid = false;
        }

        // Validate Email
        if (emailField.value.trim() === '') {
            alert('Email is required');
            valid = false;
        } else if (!validateEmail(emailField.value.trim())) {
            alert('Please enter a valid email address');
            valid = false;
        }

        // Validate Password
        if (passwordField.value.trim() === '') {
            alert('Password is required');
            valid = false;
        } else if (passwordField.value.length < 6) {
            alert('Password must be at least 6 characters long');
            valid = false;
        }

        // Confirm Password
        if (confirmPasswordField.value.trim() === '') {
            alert('Please confirm your password');
            valid = false;
        } else if (confirmPasswordField.value !== passwordField.value) {
            alert('Passwords do not match');
            valid = false;
        }

        if (valid) {
            const registrationId = `USER${Math.floor(Math.random() * 100000)}`; // Generate a mock ID
            alert(`Signup successful! Your Registration ID is: ${registrationId}`);

            // Store Registration ID and Email in Local Storage
            localStorage.setItem('registrationId', registrationId);
            localStorage.setItem('email', emailField.value.trim());

            window.location.href = 'login.html'; // Redirect to login page
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});
