const removeFromArray = function() {
    let returnArray = arguments[0];

    for(i = 1; i < arguments.length; i++) {
        returnArray = returnArray.filter(element => element !== arguments[i]);
    }

    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
