const eqArrays = require('./eqArrays');


const assertArraysEqual = function (a, b) {
  if (eqArrays(a, b)) {
    console.log(`✅  Assertion Passed:[${a}] === [${b}]`);
  } else {
    console.log(`🛑  Assertion Failed:[${a}] !== [${b}]`);
  }
};

module.exports = assertArraysEqual;
