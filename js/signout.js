document.addEventListener('DOMContentLoaded', function() {
    const signOutButton = document.getElementById('signout-btn');

    if (signOutButton) {
        signOutButton.addEventListener('click', function(event) {
            event.preventDefault();   
            localStorage.removeItem('userSession');   
            window.location.href = 'login.html';
        });
    }
});