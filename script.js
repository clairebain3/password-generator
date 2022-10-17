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
  var i = 0
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
var UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var NUMBERS = '0123456789'
var SPECIALCHARACTERS = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'

function randomLowercase(){ 
randomLC =  Math.floor(Math.random() * LOWERCASE.length);
return LOWERCASE[randomLC];
}

function randomUppercase(){ 
  randomUP = Math.floor(Math.random() * UPPERCASE.length);
  return(UPPERCASE[randomUP]);
  }

function randomNumber(){ 
  randomN = Math.floor(Math.random() * NUMBERS.length);
    return(NUMBERS[randomN]);
    }  
function randomSpecialCharacter(){ 
  randomSC = Math.floor(Math.random() * SPECIALCHARACTERS.length);
      return(SPECIALCHARACTERS[randomSC]);
      }


  if (includeLowercase === true){
    passwordString += randomLowercase();
    functionsToUse.push('Lowercase');
  }
  if (includeUppercase === true){
    passwordString += randomUppercase();
    functionsToUse.push('Uppercase');
  }

  if (includeNumbers === true){
    passwordString += randomNumber();
    // i += 1;
    functionsToUse.push('Number');
  }
  if (includeSpecialCharacters === true){
    passwordString += randomSpecialCharacter();
    // i += 1;
    functionsToUse.push('SpecialCharacter');
  }

  console.log(includeLowercase)
  console.log(functionsToUse)

  function callRandomFunction(){ 
    var randomFunctionNumber =  Math.floor(Math.random() * functionsToUse.length);
    return (functionsToUse[randomFunctionNumber]);
    }

 for (let i = passwordString.length; i < passwordLength; i++){  


 whichFunction = callRandomFunction();
  
if (whichFunction === 'Lowercase'){
  passwordString += randomLowercase();
}
else if (whichFunction === 'Uppercase'){
  passwordString += randomUppercase();
}
else if (whichFunction ==='Number'){
  passwordString += randomNumber();
}
else if (whichFunction === 'SpecialCharacter'){
  passwordString += randomSpecialCharacter();
}



 }


return passwordString;



}


