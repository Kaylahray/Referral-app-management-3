document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("login-id").value;
    console.log(username);
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
      alert("Login successful");
      //   please fix the code below to redirect...
      location.href = "/#/dashboardPage.html";
    } else {
      alert("Enter admin for both username and password");
    }
  });

document
  .getElementById("toggle-password")
  .addEventListener("click", function () {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
      this.textContent = "HIDE";
    } else {
      passwordField.type = "password";
      this.textContent = "SHOW";
    }
  });
