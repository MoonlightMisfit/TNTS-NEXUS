let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function() {
  if(password.type == "password"){
    password.type = "text";
    eyeicon.src = "eye.svg";
  }
  else{
    password.type = "password";
    eyeicon.src = "slash-eye.svg";
  }
}
function showForgot() {
    document.getElementById('signin-form').style.display = 'none';
    document.getElementById('forget-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('forget-form').style.display = 'none';
    document.getElementById('signin-form').style.display = 'block';
}

function showCantSignin() {
    document.getElementById('signin-form').style.display = 'none';
    document.getElementById('cant-signin-form').style.display = 'block';
}

function showLogin1() {
    document.getElementById('cant-signin-form').style.display = 'none';
    document.getElementById('signin-form').style.display = 'block';
}