document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const messageDiv = document.createElement('div');
    messageDiv.id = 'login-message';
    form.insertBefore(messageDiv, form.firstChild); 

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let message = '';

        if (email === '' || password === '') {
            message = 'Both fields are required.';
            messageDiv.style.color = 'red';
        } else if (!validateEmail(email)) {
            message = 'Invalid email format.';
            messageDiv.style.color = 'red';
        } else if (password.length < 6) { 
            message = 'Password must be at least 6 characters long.';
            messageDiv.style.color = 'red';
        } else {
            
            message = 'Login successful! Redirecting...';
            messageDiv.style.color = 'green';

            setTimeout(() => {
                window.location.href = 'gymhome.html'; 
            }, 2000);
        }

        messageDiv.textContent = message;
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});