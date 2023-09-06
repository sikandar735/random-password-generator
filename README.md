# random-password-generator

1 HTML:

    There is an HTML input element with the ID "password" where the generated password will be displayed.
    There's a button that, when clicked, triggers the createPassword function to generate and display the random password.
    Additionally, there is a hidden popup message element with the ID "popupMessage" that will briefly appear to notify the user when the password has been copied to the clipboard.

2 JavaScript:

    The script starts by defining the passwordBox variable, which stores a reference to the input element with the ID "password."

    The desired password length, length, is set to 12 characters.

    Four string variables (upperCase, lowerCase, symbol, and number) are defined, each containing a set of characters: uppercase letters, lowercase letters, symbols, and numbers.

    The allChars variable combines all these character sets into a single string.

    The createPassword function generates a random password with the following criteria:

    It includes at least one character from each character set.
    It fills the remaining characters to meet the desired length with random characters from allChars.
    The generated password is assigned to the value property of the passwordBox input element.

    The copyPassword function copies the generated password to the clipboard when the "Copy Password" button is clicked. It also displays the hidden popup message for 1 second to notify the user when the copy operation is successful.

3 CSS:

    the css file is also atteched.


In summary, this code allows users to generate random passwords with a specified length and copy them to the clipboard. It ensures the password contains a mix of uppercase letters, lowercase letters, symbols, and numbers for security. The popup message briefly appears to confirm that the password has been successfully copied to the clipboard, enhancing user experience and usability. This code can be incorporated into a simple HTML webpage with a basic UI to generate and copy passwords easily.