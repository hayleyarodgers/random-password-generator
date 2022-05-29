// Define array of lowercase characters 
var lowerCaseCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Define array of uppercase characters 
var upperCaseCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Define array of numeric characters 
var numericCharacters = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
 ];

// Define array of special chartacters
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

function generatePassword() {
  // Ask user for their password length.
  var userChoiceLength = window.prompt("How many characters would you like your password to contain?");

  // If password length is not a number, less than 8 characters or more than 128 characters, restart the application.
  if (isNaN(userChoiceLength)) {
    alert ("Password length must be numerical.");
    return;
  } else if (userChoiceLength < 8) {
    alert ("Password length must be at least 8 characters.");
    return;
  } else if (userChoiceLength > 128) {
    alert ("Password length must be less than 129 characters.");
    return;
  }

  // Ask user for their password criteria.
  var userChoiceLowerCase = window.confirm("Click OK if you would you like your password to include lowercase characters.");
  var userChoiceUpperCase = window.confirm("Click OK if you would you like your password to include uppercase characters.");
  var userChoiceNumeric = window.confirm("Click OK if you would you like your password to include numeric characters.");
  var userChoiceSpecial = window.confirm("Click OK if you would you like your password to include special characters.");

  // At least one password criteria must be selected. If no password criteria are selected, restart the application.
  if (!userChoiceLowerCase && !userChoiceUpperCase && !userChoiceNumeric && !userChoiceSpecial) {
    alert("At least one password criteria needs to be selected.");
    return;
  }

  // Combine selected characters into one array.
  var userChoiceCombined = [
    ...(userChoiceLowerCase ? lowerCaseCharacters : []),
    ...(userChoiceUpperCase ? upperCaseCharacters : []),
    ...(userChoiceNumeric ? numericCharacters : []),
    ...(userChoiceSpecial ? specialCharacters : []),
  ]

  /* 
  Randomly select a character from selected arrays.
  Add the randomly selected character to the password.
  Repeat this for the number of password characters specified by the user. 
  */
    for (var i = 0, text = ""; i < userChoiceLength; i++) {
      var randomCharacterIndex = Math.floor(Math.random() * userChoiceCombined.length);
      var randomCharacter = userChoiceCombined[randomCharacterIndex];
      text += randomCharacter
    }
  
  return text

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (typeof password === 'undefined') {
    passwordText.value = "";
  } else {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);