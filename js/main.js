const loginButton = document.querySelector(".login-button");
const togglePassword = document.getElementById("toggle-password");
const passwordField = document.getElementById("password");
const usernameField = document.getElementById("login-id");
loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  var username = usernameField.value;
  var password = passwordField.value;

  if (username === "admin" && password === "admin") {
    console.log("Worked!");
    document.querySelector("[login]")?.click();
  } else {
    alert("Enter admin for both username and password");
  }
});

togglePassword.addEventListener("click", function (e) {
  e.preventDefault();
  if (passwordField.type === "password") {
    passwordField.type = "text";
    this.textContent = "HIDE";
  } else {
    passwordField.type = "password";
    this.textContent = "SHOW";
  }
});
