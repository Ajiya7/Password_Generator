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
  var Uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var Lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = [0,1,2,3,4,5,6,7,8,9];
  var specialcharacters =["!","@","#","$","%","^","&","*","(",")","|",",",">","<",".","[","]","{","}","-","=","+","_","/",";",";","?","`","~","§"];
  var profile = {
    PasswordLength: 0,
    Uppercaseconfirm: false,
    Lowercaseconfirm: false,
    numbersconfirm: false,
    specialcharactersconfirm: false,
    initialPassword: "",

     pwdPasswordLength: function () {
      this.PasswordLength = prompt("Choose the lenght of the password between 8 and 127 in the textbox under:");
      if (this.PasswordLength >7 &&this.PasswordLength < 128) {
      } else {
        alert("Please choose between the specified number of characters");
        generatePassword();
      };
    },

    pwdUppercaseconfirm: function () {
     
      this.Uppercaseconfirm = confirm("Do you want to include upper case characters in your password ?");
  
      if (this.Uppercaseconfirm===true) {
        for (var u = 0; u < this.PasswordLength; u++) {
          var upperRandom = Math.floor(Math.random() * Uppercase.PasswordLength);
          this.initialPassword += Uppercase[upperRandom];
        }
    }
   
    return this.initialPassword;
    },

    pwdLowercaseconfirm: function () {
    
    this.Lowercaseconfirm = confirm("Do you want to include lower case characters in your password ?");
 
    if (this.Lowercaseconfirm===true) {
      for (var l = 0; l < this.PasswordLength; l++) {
        var lowerRandom = Math.floor(Math.random() * Lowercase.PasswordLength);
        this.initialPassword += Lowercase[lowerRandom];
      }
    }

    return this.initialPassword;
    },

    pwdnumbersconfirm: function () {
 
    this.numbersconfirm = confirm("Do you want to include numbers in your passsword ?");

    if (this.numbersconfirm===true) {
      for (var n = 0; n < this.PasswordLength; n++) {
        var numbersRandom = Math.floor(Math.random() * numbers.PasswordLength);
        this.initialPassword += numbers[numbersRandom];
      }
    }

    return this.initialPassword;
    },

    pwdspecialcharactersconfirm: function () {   
    this.specialcharactersconfirm = confirm("Do you want to include special characters in your password ?");
    
    if (this.specialcharactersconfirm===true) {
      for (var s = 0; s < profile.PasswordLength; s++) {
        var specialCharRandom = Math.floor(Math.random() * specialcharacters.PasswordLength);
        this.initialPassword += specialcharacters[specialCharRandom];  
      }
    }
    else if (this.Uppercaseconfirm===false && this.Lowercaseconfirm===false && this.numbersconfirm===false && this.specialcharactersconfirm===false) {
      alert("At least one criteria must be selected. Please generate a new password.");
      return;
    }
    return(this.initialPassword);  
    }  
  };
  while (profile.length !== null) {
    profile.pwdPasswordLength();
    profile.pwdUppercaseconfirm();
    profile.pwdLowercaseconfirm();
    profile.pwdnumbersconfirm();
    profile.pwdspecialcharactersconfirm();

    var initialPasswordLength = profile.initialPassword.PasswordLength;
    var result = "";

    for (var i = 0; i < profile.PasswordLength; i++) {
      result += profile.initialPassword.charAt(Math.floor(Math.random() * initialPasswordLength));
    }
   
    return result;
  }
  }