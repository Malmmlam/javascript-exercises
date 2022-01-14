const palindromes = function (str) {
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~/\s/g]/g;
    str = str.replace(regex, "");
    str = str.toLowerCase();
    let strArray = str.split("");
    let checkArray = reverseString(str).split("");
    let returnBool = true;
    
    for(let i = 0; i < strArray.length; i++) {
        if(checkArray[i] !== strArray[i]) {
            returnBool = false;
        }
    }

    return returnBool;
};

const reverseString = function(str) {
    let returnStr = "";
    
    for(let i = str.length - 1; i >= 0; i--) {
        returnStr += str[i];
    }

    return returnStr;
};

// Do not edit below this line
module.exports = palindromes;
