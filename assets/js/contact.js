document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.sendForm('service_1i0tv8c', 'template_qc4jfo', this)
        .then(function() {
            document.querySelector('.sent-message').style.display = 'block';
            document.querySelector('.error-message').style.display = 'none';
            document.getElementById('contact-form').reset();
        }, function(error) {
            document.querySelector('.error-message').textContent = 'Message could not be sent. Please try again.';
            document.querySelector('.error-message').style.display = 'block';
            document.querySelector('.sent-message').style.display = 'none';
        });
});
