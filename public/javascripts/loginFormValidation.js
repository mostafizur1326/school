document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const form = e.target;
  let isValid = true;

  const emailField = form.querySelector('input[name="email"]');
  const emailError = emailField.nextElementSibling;
  if (emailField.value.trim() === '') {
    emailError.textContent = 'Email is required';
    emailError.classList.remove('hidden');
    isValid = false;
  } else {
    emailError.classList.add('hidden');
  }

  const passwordField = form.querySelector('input[name="password"]');
  const passwordError = passwordField.nextElementSibling;
  if (passwordField.value.trim() === '') {
    passwordError.textContent = 'Password is required';
    passwordError.classList.remove('hidden');
    isValid = false;
  } else {
    passwordError.classList.add('hidden');
  }

  const conditionField = form.querySelector('input[name="condition"]');
  const conditionError = conditionField.nextElementSibling.nextElementSibling;
  if (!conditionField.checked) {
    conditionError.textContent = 'You must agree to the terms';
    conditionError.classList.remove('hidden');
    isValid = false;
  } else {
    conditionError.classList.add('hidden');
  }

  if (isValid) {
    form.submit();
  }
});