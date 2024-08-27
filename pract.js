console.log(1==="1")

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Basic validation
    if (email === '' || password === '') {
        errorMsg.textContent = 'Please fill in both fields.';
        return;
    }

    // Example: Basic email and password check
    if (validateEmail(email) && validatePassword(password)) {
        // Normally, you'd send the data to the server here using fetch or XMLHttpRequest
        alert('Login successful');
        // window.location.href = 'dashboard.html'; // Redirect to another page
    } else {
        errorMsg.textContent = 'Invalid email or password format.';
    }
});

// Simple email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Simple password validation (at least 6 characters)
function validatePassword(password) {
    return password.length >= 6;
}
