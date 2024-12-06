// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevents the default form submission

//     emailjs.sendForm('service_1i0tv8c', 'template_qc4jfo', this)
//         .then(function() {
//             document.querySelector('.sent-message').style.display = 'block';
//             document.querySelector('.error-message').style.display = 'none';
//             document.getElementById('contact-form').reset();
//         }, function(error) {
//             document.querySelector('.error-message').textContent = 'Message could not be sent. Please try again.';
//             document.querySelector('.error-message').style.display = 'block';
//             document.querySelector('.sent-message').style.display = 'none';
//         });
// });

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    console.log("Form submitted");
    console.log("Name:", this.user_name.value);
    console.log("Email:", this.user_email.value);
    console.log("Message:", this.message.value);

    emailjs.sendForm('service_1i0tv8c', 'template_qc4jfo', this)
        .then(function() {
            console.log("Message sent successfully");
            document.querySelector('.sent-message').style.display = 'block';
            document.querySelector('.error-message').style.display = 'none';
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.error("Error sending message:", error);
            document.querySelector('.error-message').textContent = 'Message could not be sent. Please try again.';
            document.querySelector('.error-message').style.display = 'block';
            document.querySelector('.sent-message').style.display = 'none';
        });
});
