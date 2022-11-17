const eqObjects = function (object1, object2) {
  let length1 = Object.keys(object1).length
  let length2 = Object.keys(object2).length
  let keyFirst = Object.keys(object1)
  if (length1 !== length2) {
    return false
  }
  for (const keys of keyFirst) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      if (!eqArrays(object1[keys], (object2[keys]))) {
        return false;
      }
    } else if (object1[keys] !== object2[keys]) {
      return false
    }

    return true
  }
};


// FUNCTION IMPLEMENTATION
// const assertObjectsEqual = function(actual, expected) {
//   // Implement me!
// const inspect = require('util').inspect; // <= add this line// ...
//   if (eqObjects(actual, expected)) {
//     console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertObjectsEqual = function (actual, expected) {
  //Implement me!
  const inspect = require('util').inspect; //<= add this line// ...
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }


};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };



assertObjectsEqual(eqObjects(ab, ba), true)
