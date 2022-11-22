const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');


assertArraysEqual(middle([1, 2, 3, 4]), [2,3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]) // => [3, 4]
assertArraysEqual(middle([2,7,6,5,4,3,2]), [5])