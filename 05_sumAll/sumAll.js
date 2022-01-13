const sumAll = function(num1, num2) {
    let returnNum = 0;
    let numArray = [num1, num2];

    for(let i = 0; i < numArray.length; i++) {
        if(numArray[i] < 0 || typeof numArray[i] != "number") {
            return "ERROR";
        }
    }

    numArray.sort(function(a, b) 
        {return a - b});
    
    for(let i = 0; i <= numArray[1]; i++) {
        returnNum += i;
    }
    
    return returnNum;
};

// Do not edit below this line
module.exports = sumAll;
