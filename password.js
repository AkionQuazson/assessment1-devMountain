let password = 'asdf1213';
/*
    As requested, the minimum length is 10, and a letter and a number are both required.
    In addition, there is a maximum length of 20, and the space character is not allowed in the password.
*/

let passChars = password.split('');
let num = false;
let ltr = false;
let spcs = false;
if (passChars.length < 10) {
    console.log("Password is not long enough.");
}
else if (passChars.length > 20) {
    console.log("Password is too long.");
}
else {
    for (i = 0; i < passChars.length; i++) {
        if (!num && parseInt(passChars[i])) {
            num = true;
        }
        else if (!ltr && passChars[i].toLowerCase() !== passChars[i].toUpperCase()) {
            ltr = true;
        }
        else if (!spc && passChars[i] === " ") {
            spc = true;
        }
    }
    if (!num) {
        console.log("There is no number in the password");
    }
    else if (!ltr) {
        console.log("There is no letter in the password");
    }
    else if (spcs) {
        console.log("There is a space in the password");
    }
    else {
        console.log("Password meets all requirements");
    }
}