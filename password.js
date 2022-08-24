let password = 'asdf1213';

const NUMBERS = ['1','2', '3', '4', '5', '6','7','8','9','0'];
const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let passChars = password.split('');
let num = false;
let ltr = false;
if (passChars.length < 10) {
    console.log("Password is not long enough.");
}
else {
    for (i = 0; i < passChars.length; i++) {
        if (!num && parseInt(passChars[i])) {
            num = true;
        }
        else if (!ltr && passChars[i].toLowerCase() !== passChars[i].toUpperCase()) {
            ltr = true;
        }
    }
    if (!num) {
        console.log("There is no number in the password");
    }
    else if (!ltr) {
        console.log("There is no letter in the password");
    }
    else {
        console.log("Password meets all requirements");
    }
}