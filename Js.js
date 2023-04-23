function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    document.getElementById("message").innerHTML = "Please enter both username and password";
  } else if (username === "myusername" && password === "mypassword") {
    document.getElementById("message").innerHTML = "Login successful Password: 12HScript(:";
    if (document.getElementById("remember-me").checked) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    }
  } else {
    document.getElementById("message").innerHTML = "Invalid username or password";
  }
}

function resetPassword() {
  const email = prompt("Please enter your registered email address");
  if (email !== null) {
    alert("An email has been sent to your registered email address with instructions on how to reset your password.");
  }
}

function checkPasswordStrength() {
  const password = document.getElementById("password").value;
  let strength = "";
  if (password.length < 8) {
    strength = "Weak";
  } else if (password.length < 12) {
    strength = "Moderate";
  } else {
    strength = "Strong";
  }
  document.getElementById("password-strength").innerHTML = "Password strength: " + strength;
}

document.getElementById("password").addEventListener("keyup", checkPasswordStrength);

if (localStorage.getItem("username") !== null && localStorage.getItem("password") !== null) {
  document.getElementById("username").value = localStorage.getItem("username");
  document.getElementById("password").value = localStorage.getItem("password");
  document.getElementById("remember-me").checked = true;
}
