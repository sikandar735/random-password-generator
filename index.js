 const passwordBox = document.getElementById("password")
 const lenght = 12;

 const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const lowerCase = "abcdefghijklmnopqrstuvwxyz";
 const symbol = "!@#$%^&*()-_+={}[]|:;<>?/~";
 const number = "0123456789";
 const allChars = upperCase + lowerCase + symbol + number;

 function createPassword(){
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    
    while (lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.lenght)];
    }
    passwordBox.value = password;
 }


 
 function copyPassword() {
    if (passwordBox) {
      passwordBox.select();
      document.execCommand("copy");
      
      // Show the popup message
      var popupMessage = document.getElementById("popupMessage");
      popupMessage.style.display = "block";
  
      // Hide the popup message after 4 seconds
      setTimeout(function () {
        popupMessage.style.display = "none";
      }, 1000); // 4 seconds
    } else {
      alert("Unable to copy password. Element not found.");
    }
  }


  