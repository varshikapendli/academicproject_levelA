/ scripts.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (username && email && message) {
        document.getElementById('status').textContent = 'Thank you for your message!';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('status').textContent = 'Please fill in all fields.';
    }
});