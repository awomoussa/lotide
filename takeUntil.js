
// const eqArrays = function (array1, array2) {
//   if (array1.length === array2.length) {
//     for (var i = 0; i < array2.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//   }
//   else {
//     return false;
//   }
//   return true;


// }

// const assertArraysEqual = function (a, b) {
//   if (eqArrays(a, b)) {
//       console.log(`✅  Assertion Passed:[${a}] === [${b}]`);
//   } else {
//       console.log(`🛑  Assertion Failed:[${a}] !== [${b}]`);
//   }
// };



const takeUntil = function(array, callback) {
  // ...
  let results = [];
  for (let i = 0; i < array.length; i++){
      if (!callback(array[i])){
          results.push(array[i]);
      } else {
          break;}
      }
      return results;
  }

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


