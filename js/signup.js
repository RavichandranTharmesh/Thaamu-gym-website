document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const fullnameInput = document.querySelector('input[name="fullname"]');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const messageDiv = document.createElement('div');
    messageDiv.id = 'signup-message';
    form.insertBefore(messageDiv, form.firstChild); 

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const fullname = fullnameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let message = '';

        if (fullname === '' || email === '' || password === '') {
            message = 'All fields are required.';
            messageDiv.style.color = 'red';
        } else if (!validateEmail(email)) {
            message = 'Invalid email format.';
            messageDiv.style.color = 'red';
        } else if (password.length < 6) { 
            message = 'Password must be at least 6 characters long.';
            messageDiv.style.color = 'red';
        } else {
            
            message = 'Signup successful! Redirecting...';
            messageDiv.style.color = 'green';
            
            setTimeout(() => {
                window.location.href = 'login.html'; 
            }, 2000);
        }

        messageDiv.textContent = message;
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});