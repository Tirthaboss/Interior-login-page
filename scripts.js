// Form validation
const form = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

// Submit form
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = passwordInput.value.trim();
  const rememberMe = document.getElementById('rememberMe').checked;

  if (email === "" || password === "") {
    alert("Please fill in all fields.");
  } else if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
  } else {
    alert(`Login Successful!\nEmail: ${email}\nRemember Me: ${rememberMe}`);
    form.reset();
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Show/Hide password toggle
togglePassword.addEventListener('click', function() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  
  // Change the eye icon
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});

// Toggle Dark Mode (Optional - if you add dark mode CSS later)
const toggleModeButton = document.getElementById('toggleMode');
if (toggleModeButton) {
  toggleModeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
}
