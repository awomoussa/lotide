const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function (array) {
  let result = [];
  if (array.length % 2 === 0) {
      result = [array[array.length / 2 - 1], array[array.length / 2]]
  } else {
      result =  [array[Math.round(array.length / 2 - 1)]];
  }
  console.log(result);
  return result;
  
}


module.exports = middle;
