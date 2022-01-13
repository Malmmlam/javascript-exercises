const ftoc = function(f) {
  returnTemp = (f-32) * 5 / 9;
  return parseFloat(returnTemp.toFixed(1));
};

const ctof = function(c) {
  returnTemp = c * 1.8 + 32;
  return parseFloat(returnTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
