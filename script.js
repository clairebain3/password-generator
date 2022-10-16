///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  var passwordLength = window.prompt("How long do you want your password to be? (between 8-128 characters)")
  var includeLowercase = window.confirm("Do you want to include lowercase letters?")
  var includeUppercase = window.confirm("Do you want to include uppercase letters?")
  var includeNumbers = window.confirm("Do you want to include numbers?")
  var includeSpecialCharacters = window.confirm("Do you want to include special characters?")
// validate password length variable
  if (passwordLength > 128 || passwordLength < 8) {
window.alert("Please enter a valid password length.");
return;
}
// validate character types for password
if (includeLowercase===false && includeUppercase ===false && includeNumbers === false && includeSpecialCharacters===false){
  window.alert("Oops! You need at least one character type.");
  return;
}


}
