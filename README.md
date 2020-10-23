# Password Generator
The password generator is an application for users to generate a random password based on criteria they have selected. The app runs in the browser using HTML and CSS powered by Javascript.

## Links
[Password Generator Website](https://seattlesal.github.io/password-generator/)

[GitHub Repository](https://github.com/SeattleSal/password-generator)

## Password Inputs
The user can select the following criteria for their password:
### Length
Length should be between 8 and 128 characters. If the user chooses a number less than 8 or greater than 128, they will be prompted again for a number within the range. If the user inputs something that is not a number, they will be prompted again for a number within the range.
### Character Types
The user can choose from four character types including: upper case alpha characters, lower case alpha characters, number (0 - 9) and special characters. Special characters include: 
For more information on special characters, please see [OWASP Special Characters](https://www.owasp.org/index.php/Password_special_characters)

## Password Creation Algorithm
A password is created that is the lenght requested by the user. For all character types the user selected, the algorithm will contain a random character for each type in the password. There is a pattern of character types, for example if the user chooses all four character types the password will be in order of: lower case letter, upper case letter, number, special character. Each character though will be randomly chosen from the type.

## Page Responsiveness
The layout responds and adapt to differen screen sizes using media queries.

## Screenshot
Full size:
![Password Generator](./assets/pwd-generator-screenshot.png)



