document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let emailInput = document.getElementById('email-input');
    let email = emailInput.value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errorMessage = document.getElementById('error-message');
    let errorIcon = document.getElementById('error-icon');

    if (!emailRegex.test(email)) {
        errorMessage.textContent = 'Please provide a valid email';
        errorMessage.style.display = 'inline';
        errorIcon.style.display = 'inline';
    } else {
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
        errorIcon.style.display = 'none';
        this.submit();
    }
});

document.getElementById('email-input').addEventListener('input', function() {
    let errorIcon = document.getElementById('error-icon');
    errorIcon.style.display = 'none';
    let errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none';
});
