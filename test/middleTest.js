// const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');



// assertArraysEqual(middle([1, 2, 3, 4]), [2,3]) // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]) // => [3, 4]
// assertArraysEqual(middle([2,7,6,5,4,3,2]), [5])

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns 55 for ['5, 45, 44, 55, 66, 77, 88']", () => {
    assert.deepEqual(middle([5, 45, 44, 55, 66, 77, 88]), [55]); 
  });
});