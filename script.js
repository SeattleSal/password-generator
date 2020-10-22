// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays of character types numbers, lower case letters, upper case letters and special character
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChars = [' ', '!', '\"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// variables to capture if the created pwd contains the user preferences
// default to false and will change to true when char type is added to pwd
var containsLowerCase = false;
var containsUpperCase = false;
var containsNumbers = false;
var containsSpecialChars = false;
// console.log("contains... numbers: " + containsNumbers + " , lowercase: " + containsLowerCase +
//               " , upper: " + containsUpperCase + " , specialchars: " + containsSpecialChars);

function generatePassword() {
  // Get user input for pwd length
  // If input is not a number or not in range, reprompt user until input is ok
  var passwordLength = prompt("How long for your password? Enter number between 8 and 128 please.");
  while (isNaN(passwordLength) || (passwordLength < 8 || passwordLength > 128)) {
      passwordLength = prompt("Please enter a length between 8 and 128!");
  }

  console.log("Password length: " + passwordLength);

  // Confirm user's preferences for the following to include:
  // 1/ lower case letters (yes/no)
  // 2/ upper case letters (yes/no)
  // 3/ numbers (yes/no)
  // 4/ special characters (yes/no)
  var useLowerCase = confirm("Include lower case letters? Click OK if yes.");
  var useUpperCase = confirm("Include upper case letters? Click OK if yes.");
  var useNumbers = confirm("Include numbers? Click OK if yes.");
  var useSpecialChars = confirm("Include special characters? Click OK if yes.");

  //  If user chooses none of the character types, assign a character type for them.
  // TO DO: is there a better way to do this? prompt for which they want instead?
   if (!useLowerCase && !useUpperCase && !useNumbers && !useSpecialChars) {
      alert("You have chosen no character types. Please try again.")
      // useSpecialChars = true;
      return pwd.toString;
   }

  // create password of length passwordLength using above criteria
  var pwd = [];
  var charCategory = 1;
  while(pwd.length < passwordLength) {

    if(useLowerCase && pwd.length < passwordLength) {
      pwd = pwd + lowerCaseLetters[randomNumber(lowerCaseLetters)];
    }

    if(useUpperCase && pwd.length < passwordLength) {
      pwd = pwd + upperCaseLetters[randomNumber(upperCaseLetters)];
    }

    if(useNumbers && pwd.length < passwordLength) {
      pwd = pwd + numbers[randomNumber(numbers)];
    }

    if(useSpecialChars && pwd.length < passwordLength) {
      pwd = pwd + specialChars[randomNumber(specialChars)];
    }
    console.log("building pwd: " +pwd);
    
  }
  console.log("Password length: " + pwd.length);
  console.log("New password: " + pwd);

  return pwd.toString();

}


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// random number generator with input
// range is 0 to length of array - 1
function randomNumber(arr) {
  return Math.floor((Math.random() * (arr.length - 1) + 1));
}


// Add event listener to generate button
// function writePassword is tied to event listener so will run
// in eventListener
generateBtn.addEventListener("click", writePassword);


