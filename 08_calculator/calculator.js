const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let returnValue = 0;
  for(let i = 0; i < numArray.length; i++) {
    returnValue += numArray[i];
  }

  return returnValue;
};

const multiply = function(numArray) {
  let returnValue = numArray[0];
  for(let i = 1; i < numArray.length; i++) {
    returnValue *= numArray[i]
  }
  return returnValue;
};

const power = function(num1, exponenent) {
	return Math.pow(num1, exponenent);
};

const factorial = function(num1) {
	let returnValue = 1;
  for(let i = 1; i <= num1; i++) {
    returnValue *= i;
  }
  return returnValue;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
