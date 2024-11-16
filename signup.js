// Get references to the form and form fields
const signupForm = document.querySelector('.signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

// Function to validate form inputs
function validateForm(event) {
    event.preventDefault(); // Prevent form submission until validation is done

    // Get the values of the fields
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    let isValid = true;
    
    // Name validation: must not be empty
    if (name === '') {
        alert('Name is required!');
        isValid = false;
    }

    // Email validation: simple regex for valid email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    // Password validation: must have at least 8 characters, 1 number, and 1 symbol
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must contain at least 8 characters, 1 number, and 1 symbol.');
        isValid = false;
    }

    // Confirm Password validation: must match the password
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert('Sign up successful!');
        
        signupForm.submit(); // In a real-world scenario, you would send the data to the server here
        window.location.href = 'login.html';
    }
}

// Add event listener to the signup form for submission
signupForm.addEventListener('submit', validateForm);
