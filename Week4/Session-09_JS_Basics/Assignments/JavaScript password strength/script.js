// Your solution goes here
let pass = prompt("Enter Password");
let a = pass.search("password");
let lower_case = pass.toLowerCase();

function isStrongPassword(Password) {
  if (Password.length < 8) {
    alert("The password is at least 8 characters long.");
  } else if (a != -1) {
    alert("The password does not contain the string 'password'.");
  } else if (pass === lower_case) {
    alert("The password contains at least one uppercase character.");
  }
}

isStrongPassword(pass);
