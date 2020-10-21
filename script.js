// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays of character types numbers, lower case letters, upper case letters and special character
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i','j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I','J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialChars = [' ', '!', '\"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

// variables to capture if the created pwd contains the user preferences
// default to false and will change to true when char type is added to pwd
var containsNumbers = false;
var containsLowerCase = false;
var containsUpperCase = false;
var containsSpecialChars = false;
// console.log("contains... numbers: " + containsNumbers + " , lowercase: " + containsLowerCase +
//               " , upper: " + containsUpperCase + " , specialchars: " + containsSpecialChars);

function generatePassword() {
  // variables for user input - create and store while gathering user input
  // pwd length
  const passwordLength = prompt("How long for your password? Enter number between 8 and 128 please.");

  // TO DO: add length check if user enters wrong number multiple times
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please enter a length between 8 and 128!");
  }
  console.log("Password length " + passwordLength);

  // Confirm user's preferences for the following to include:
  // 1/ lower case letters (yes/no)
  // 2/ upper case letters (yes/no)
  // 3/ numbers (yes/no)
  // 4/ special characters (yes/no)
  const useLowerCase = confirm("Include lower case letters? Click OK if yes.");
  console.log("Include lowerCase: " + useLowerCase);
  const useUpperCase = confirm("Include upper case letters? Click OK if yes.");
  console.log("Include upperCase: " + useUpperCase);
  const useNumbers = confirm("Include numbers? Click OK if yes.");
  console.log("Use numbers: " + useNumbers);
  const useSpecialChars = confirm("Include special characters? Click OK if yes.");
  console.log("Use special chars: " + useSpecialChars);
 
  // create password of length passwordLength using above criteria
  var pwd = [];
  var charCategory = 1;
  var x;
  for (i = 0; i < passwordLength; i++) {
    x = randomNumber(lowerCaseLetters);
    console.log("random number: " + x);
    pwd = pwd + lowerCaseLetters[x];
    i++;

    x = randomNumber(upperCaseLetters);
    console.log("random number: " + x);
    pwd = pwd + upperCaseLetters[x];
    i++;

    x = randomNumber(numbers);
    console.log("random number: " + x);
    pwd = pwd + numbers[x];
    i++;

    x = randomNumber(specialChars);
    console.log("random number: " + x);
    pwd = pwd + specialChars[x];
    console.log(pwd);

    // if lowercase= true and no lowercase, add lowercase
    // if uppercase=true and no uppercase, add upsercase
    // if number= true and no number, add number
    // if specialchar=true and no specialchar, addspecialchar
  }
  console.log("New password: " + pwd);

  return pwd.toString();

}


// Write password to the #password input
function writePassword() {

  console.log("I'm in writePassword!");

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


