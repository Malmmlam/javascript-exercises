const palindromes = function (str) {
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~/\s/g]/g;
    str = str.replace(regex, "").toLowerCase();
    let strArray = str.split("");
    let checkArray = str.split("").reverse();

    return strArray.every((value, index) => value === checkArray[index]);
};

// Do not edit below this line
module.exports = palindromes;
