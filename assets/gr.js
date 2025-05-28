<script>
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

const form = document.getElementById('myForm');
const name = document.getElementById('name-contact-form-3-uMjmwRMStV');
const email = document.getElementById('email-contact-form-3-uMjmwRMStV');
const phone = document.getElementById('phone-contact-form-3-uMjmwRMStV')
const message = document.getElementById('textarea-contact-form-3-uMjmwRMStV')

const messageFailure = document.getElementById('messageFailure');

name.addEventListener('input', function() {
  name.setCustomValidity('');
  if (name.validity.valueMissing) {
    name.setCustomValidity(messages['gr'].required);
  }
}
});

email.addEventListener('input', function() {
  email.setCustomValidity('');
  if (email.validity.valueMissing) {
    email.setCustomValidity(messages['gr'].required);
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity(messages['gr'].tMismatch);
  } else if (email.validity.patternMismatch) {
    email.setCustomValidity(messages['gr'].pMismatch);
  }
});

phone.addEventListener('input', function() {
  phone.setCustomValidity('');
  if (phone.validity.valueMissing) {
    phone.setCustomValidity(messages['gr'].required);
  } else if (phone.validity.patternMismatch) {
    phone.setCustomValidity(messages['gr'].pattern);
  }
}
});

message.addEventListener('input', function() {
  message.setCustomValidity('');
  if (message.validity.valueMissing) {
    message.setCustomValidity(messages['gr'].required);
  }
}
});

form.addEventListener('submit', function(event) {
  let valid = true;
  messageFailure.textContent = '';
  if (!name.value
     ||!email.value
     ||!phone.value
     ||!message.value) {
    messageFailure.textContent = messages['gr'].failure;
    valid = false;
  }
  // Add pattern check if needed
  if (!valid) {
    event.preventDefault();
    messageFailure.hidden = false;
  }
});
</script>
