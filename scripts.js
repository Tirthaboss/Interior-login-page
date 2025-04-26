// Toggle Show/Hide Password
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  togglePassword.classList.toggle('fa-eye-slash');
});

// Form Submit
const form = document.getElementById('loginForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const rememberMe = document.getElementById('rememberMe').checked;

  if (email && password) {
    alert(`Email: ${email}\nRemember Me: ${rememberMe}`);
    form.reset();
  } else {
    alert('Please fill all fields.');
  }
});

// Google Auth (Dummy)
function googleAuth() {
  alert('Redirecting to Google Authentication...');
}
  
