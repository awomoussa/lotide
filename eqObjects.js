const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion Failed: ${actual} !== ${expected}`);
  }

};

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



const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };



assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => false 
assertEqual(eqObjects(ab, abc), false); // => false