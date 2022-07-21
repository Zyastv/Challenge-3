// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password and return to writePassword
function generatePassword() {
  var newPassword = ""
  var chars = ""
  var string_length = prompt("How long would you like the password to be? Choose a number between 8 and 128")

  if (string_length < 8 || string_length > 128){
    alert("Input selected was not between 8 and 128")
    return
  }

  if(confirm("Do you want uppercase letters?")){
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(confirm("Do you want lowercase letters?")){
    chars += "abcdefghijklmnopqrstuvwxyz"
  }
  if(confirm("Do you want numbers?")){
    chars += "1234567890"
  }
  if(confirm("Do you want special characters?")){
    chars += " !\"#$%&'()*+,-./:;<=>?@[]\\^_`{|}~"
  }

  for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length)
    newPassword += chars.substring(rnum,rnum+1)
  }

  return newPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
