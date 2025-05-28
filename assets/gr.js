const messages = {
  gr: {
    failure: "Παρακαλώ συμπληρώστε όλα τα πεδία.",
    required: "Παρακαλώ συμπληρώστε αυτό το πεδίο.",
    pattern: "Παρακαλώ αντιστοιχίστε τούς ζητούμενους χαρακτήρες ##-######",
    tMismatch: "Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.",
    pMismatch: "Παρακαλώ αντιστοιχίστε τούς ζητούμενους χαρακτήρες xxx@xxx.xxx"
  }
  // Add more languages as needed
};

const pathArray = window.location.pathname.split('/');
const lang = pathArray[1] == 'gr' ? 'gr' : 'en';

const form = document.getElementById('myForm');
const name = document.getElementById('name-contact-form-3-uMjmwRMStV');
name.setCustomValidity(messages[lang].required);
const email = document.getElementById('email-contact-form-3-uMjmwRMStV');
email.setCustomValidity(messages[lang].required);
const phone = document.getElementById('phone-contact-form-3-uMjmwRMStV')
phone.setCustomValidity(messages[lang].required);
const message = document.getElementById('textarea-contact-form-3-uMjmwRMStV')
message.setCustomValidity(messages[lang].required);

const messageFailure = document.getElementById('messageFailure');

name.addEventListener('input', function() {
  name.setCustomValidity('');
  if (name.validity.valueMissing) {
    name.setCustomValidity(messages[lang].required);
  }
});

email.addEventListener('input', function() {
  email.setCustomValidity('');
  if (email.validity.valueMissing) {
    email.setCustomValidity(messages[lang].required);
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity(messages[lang].tMismatch);
  } else if (email.validity.patternMismatch) {
    email.setCustomValidity(messages[lang].pMismatch);
  }
});

phone.addEventListener('input', function() {
  phone.setCustomValidity('');
  if (phone.validity.valueMissing) {
    phone.setCustomValidity(messages[lang].required);
  } else if (phone.validity.patternMismatch) {
    phone.setCustomValidity(messages[lang].pattern);
  }
});

message.addEventListener('input', function() {
  message.setCustomValidity('');
  if (message.validity.valueMissing) {
    message.setCustomValidity(messages[lang].required);
  }
});

form.addEventListener('submit', function(event) {
  let valid = true;
  messageFailure.textContent = '';
  if (!name.value
     ||!email.value
     ||!phone.value
     ||!message.value) {
    messageFailure.textContent = messages[lang].failure;
    valid = false;
  }
  // Add pattern check if needed
  if (!valid) {
    event.preventDefault();
    messageFailure.hidden = false;
  }
});
