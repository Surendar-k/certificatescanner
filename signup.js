const signupForm = document.querySelector('.signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

function validateForm(event) {
    event.preventDefault(); 

    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    let isValid = true;
    
    if (name === '') {
        alert('Name is required!');
        isValid = false;
    }

    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must contain at least 8 characters, 1 number, and 1 symbol.');
        isValid = false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        isValid = false;
    }

    
    if (isValid) {
        alert('Sign up successful!');
        
        signupForm.submit(); 
        window.location.href = 'login.html';
    }
}


signupForm.addEventListener('submit', validateForm);
