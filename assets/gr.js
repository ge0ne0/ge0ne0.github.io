<script>
const messages = {
  gr: {
    required: "Παρακαλώ συμπληρώστε αυτό το πεδίο.",
    pattern: "Παρακαλώ αντιστοιχίστε τούς ζητούμενους χαρακτήρες ##-######",
    tMismatch: "",
    pMismatch: ""
  }
  // Add more languages as needed
};

const form = document.getElementById('myForm');
const name = document.getElementById('name-contact-form-3-uMjmwRMStV');
//const usernameError = document.getElementById('username-error');
const email = document.getElementById('email-contact-form-3-uMjmwRMStV');
const phone = document.getElementById('phone-contact-form-3-uMjmwRMStV')
const message = document.getElementById('textarea-contact-form-3-uMjmwRMStV')
email.addEventListener('input', function() {
  email.setCustomValidity('');
  if (email.validity.valueMissing) {
    email.setCustomValidity('Please enter your email address.');
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity('Please enter a valid email address.');
  } else if (email.validity.patternMismatch) {
    email.setCustomValidity('Please use your company email address (ends with @example.com).');
  }
});
form.addEventListener('submit', function(event) {
  let valid = true;
  //usernameError.textContent = '';
  if (!name.value
     ||!email.value
     ||!phone.value
     ||!message.value) {
    //usernameError.textContent = messages[lang].required;
    valid = false;
  }
  // Add pattern check if needed
  if (!valid) {
    event.preventDefault();
  }
});
</script>
