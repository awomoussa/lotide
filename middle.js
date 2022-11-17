const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (var i = 0; i < array2.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  else {
    return false;
  }
  return true;

}

const assertArraysEqual = function (a, b) {
  if (!eqArrays(a, b)) {
      console.log(`🛑  Assertion Failed:[${a}] !== [${b}]`);
  } else {
      console.log(`✅  Assertion Passed:[${a}] === [${b}]`);
  }
};


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


assertArraysEqual(middle([1, 2, 3, 4]), [2,3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]) // => [3, 4]