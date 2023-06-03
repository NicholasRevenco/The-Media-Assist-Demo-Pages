/* Required for the login change from sign up to log in*/

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


window.loginMode = "login"

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
  window.loginMode = "register"
  document.getElementById("signupMessage").innerHTML = " &nbsp; "
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
  window.loginMode = "login"
  document.getElementById("loginMessage").innerHTML = " &nbsp; "
});