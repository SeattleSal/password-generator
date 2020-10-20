// Assignment Code
var generateBtn = document.querySelector("#generate");

// array list of numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// array list of lowercase letters
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
                'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                't', 'u', 'v', 'w', 'x', 'y', 'z'];

// array list of UPPERCASE letters
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                      'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
                      'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// array list of special characters
var specialChars = [' ', '!', '\"', '#', '$', '%', '&', '(', ')', '*',
                    '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?',
                    '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

console.log(numbers);
console.log(lowerCaseLetters);
console.log(upperCaseLetters);
console.log(specialChars);

function generatePassword() {
  // variables for user input - create and store while gathering user input
  // pwd length
  const passwordLength = prompt("How long for your password? Enter number between 8 and 128 please.");

  // TO DO: add length check if user enters wrong number multiple times
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter a length between 8 and 128!");
  }
  console.log("Password length " + passwordLength);

  // capture user's preference to include lower case letters (yes/no)
  const useLowerCase = confirm("Include lower case letters? Click OK if yes.");
  console.log("Include lowerCase: " + useLowerCase);

  // capture user's preference to include upper case letters (yes/no)
  const useUpperCase = confirm("Include upper case letters? Click OK if yes.");
  console.log("Include upperCase: " + useUpperCase);

  // capture user's preference to include numbers (yes/no)
  const useNumbers = confirm("Include numbers? Click OK if yes.");
  console.log("Use numbers: " + useNumbers);
  
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


