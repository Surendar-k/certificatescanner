document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const errorMessage = document.createElement('div');
    errorMessage.classList.add('alert', 'alert-danger', 'd-none');
    form.appendChild(errorMessage);

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    function validateForm() {
        errorMessage.textContent = '';
        errorMessage.classList.add('d-none');

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!validateEmail(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.classList.remove('d-none');
            return;
        }

        if (!validatePassword(password)) {
            errorMessage.textContent = 'Password must be at least 6 characters long.';
            errorMessage.classList.remove('d-none');
            return;
        }

        alert("Form is valid. Proceeding with login...");
    }

    emailInput.addEventListener('focus', function() {
        errorMessage.classList.add('d-none');
    });

    passwordInput.addEventListener('focus', function() {
        errorMessage.classList.add('d-none');
    });
});


