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
  if (eqArrays(a, b)) {
      console.log(`✅  Assertion Passed:[${a}] === [${b}]`);
  } else {
      console.log(`🛑  Assertion Failed:[${a}] !== [${b}]`);
  }
};



const letterPositions = function (sentence) {
  const result = {};
  for (let i = 0; i < sentence.length; i ++){
    let char = sentence[i];
    if (result[char]) {
      result[char].push(i);
    }else {
      result[char] = [i];
    }
    }
    console.log(result)
    return result;
  }
  
  // console.log(letterPositions("lighthouse in the house"))
  // letterPositions("lighthouses"); 

