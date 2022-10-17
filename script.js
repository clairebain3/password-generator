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
  var functionsToUse = []
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
var passwordString = ''
var LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
// var LOWERCASE = LOWERCASE.split("")
var UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// var UPPERCASE = UPPERCASE.split("")
var NUMBERS = '0123456789'
// var NUMBERS = NUMBERS.split("")
var SPECIALCHARACTERS = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'
// var SPECIALCHARACTERS = SPECIALCHARACTERS.split("")

function randomLowercase(){ 
randomLowercase =  Math.floor(Math.random() * LOWERCASE.length);
return LOWERCASE[randomLowercase];
}

function randomUppercase(){ 
  randomUppercase = Math.floor(Math.random() * UPPERCASE.length);
  return(UPPERCASE[randomUppercase]);
  }

function randomNumber(){ 
  randomNumber = Math.floor(Math.random() * NUMBERS.length);
    return(NUMBERS[randomNumber]);
    }  
function randomSpecialCharacter(){ 
  randomSpecialCharacter = Math.floor(Math.random() * SPECIALCHARACTERS.length);
      return(SPECIALCHARACTERS[randomSpecialCharacter]);
      }

// for (let i = 0; i < passwordLength; i++){
  if (includeLowercase = true){
    passwordString += randomLowercase();
    i+= 1;
    functionsToUse.push('randomLowercase()');
  }
  if (includeUppercase = true){
    passwordString += randomUppercase();
    i += 1;
    functionsToUse.push('randomUppercase()');
  }

  if (includeNumbers = true){
    passwordString += randomNumber();
    i += 1;
    functionsToUse.push('randomNumber()');
  }
  if (includeSpecialCharacters = true){
    passwordString += randomSpecialCharacter();
    i += 1;
    functionsToUse.push('randomSpecialCharacters()')
  }

// passwordString += randomLowercase()
// passwordString += randomUppercase()
// passwordString += randomNumber()
// passwordString += randomSpecialCharacter()

window.alert(passwordString)



}
