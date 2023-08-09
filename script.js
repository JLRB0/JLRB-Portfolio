"use strict";

// Carousel

const navButtons = document.querySelectorAll('.carousel-nav-btn');
const carouselItems = document.querySelectorAll('.carousel-item');

navButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const targetIndex = parseInt(button.getAttribute('data-target'));
        
        carouselItems.forEach((item, index) => {
            if (index === targetIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
            });
    });
 });


// Guessing GAME

let randomNumber = Math.floor(Math.random() * 10) + 1;

const message = document.getElementById("message");

    function checkGuess() {
        let guess = document.getElementById("guess").value;

            if (guess == randomNumber) {
                message.textContent = "Yay, you are right!";
            } else {
                message.textContent = "No, sorry try again.";
            }
    }


    function resetGame() {
        randomNumber = Math.floor(Math.random() * 10) + 1;
        document.getElementById("guess").value = "";
        message.textContent = "";
    }

// Form

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
  
        const fullName = document.getElementById('fullName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const emailAddress = document.getElementById('emailAddress');
        const telephone = document.getElementById('telephone');
        const comments = document.getElementById('comments');
  
        const fullNameError = document.getElementById('fullNameError');
        const contactError = document.getElementById('contactError');
        const emailAddressError = document.getElementById('emailAddressError');
        const telephoneError = document.getElementById('telephoneError');
        const commentsError = document.getElementById('commentsError');
  
        let isValid = true;
  
            if (!fullName.value.trim()) {
            isValid = false;
            fullNameError.textContent = 'Full Name is required';
            } else {
            fullNameError.textContent = '';
            }
    
            if (!email.checked && !phone.checked) {
            isValid = false;
            contactError.textContent = 'Preferred method of contact is required';
            } else {
            contactError.textContent = '';
            }
    
            if (email.checked && !emailAddress.value.trim()) {
            isValid = false;
            emailAddressError.textContent = 'Email Address is required';
            } else {
            emailAddressError.textContent = '';
            }
    
            if (phone.checked && !telephone.value.trim()) {
            isValid = false;
            telephoneError.textContent = 'Telephone is required';
            } else {
            telephoneError.textContent = '';
            }
    
            if (!comments.value.trim()) {
            isValid = false;
            commentsError.textContent = 'Comments are required';
            } else {
            commentsError.textContent = '';
            }
    
            if (isValid) {
                const formData = {
                    fullName: fullName.value,
                    preferredContact: email.checked ? 'email' : 'phone',
                    emailAddress: emailAddress.value,
                    telephone: telephone.value,
                    comments: comments.value,
                };

          // Concatenates for readability on alert

          const formattedAlertMessage = `Full Name: "${formData.fullName}"\nPreferred Contact Method: "${formData.preferredContact}"\nEmail Address: "${formData.emailAddress}"\nTelephone: "${formData.telephone}"\nComments: "${formData.comments}"`;

          alert(formattedAlertMessage);
        }

    });


// DarkMode

var darkmode = document.getElementById("darkmodeLabel")

darkmode.onclick = function(){
    document.body.classList.toggle("dark-theme");

}










