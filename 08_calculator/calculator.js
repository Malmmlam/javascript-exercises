const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  const returnValue = numArray.reduce((sum, num) => sum + num, 0);
  return returnValue;
};

const multiply = function(numArray) {
  const returnValue = numArray.reduce((product, num) => product * num, 1);
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
