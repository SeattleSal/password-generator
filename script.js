// Assignment Code
var generateBtn = document.querySelector("#generate");

// array list of numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// array list of lowercase letters
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                't', 'u', 'v', 'w', 'x', 'y', 'z'];

// array list of UPPERCASE letters
// array list of special characters

function generatePassword() {
  // variables for user input - create and store while gathering user input
  // pwd length
  const passwordLength = prompt("What lenght of password?");

  // use numbers
  // use lowerCase
  // use upperCase
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
// function writePassword is tied to event listener so will run
// in eventListener
generateBtn.addEventListener("click", writePassword);


