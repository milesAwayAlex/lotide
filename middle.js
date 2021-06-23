const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = (a,b)=>a.every((e,i)=>e === b[i]);

const middle = arr => {
  const l = arr.length;
  if (l < 3) return [];
  if (l % 2 === 0) return arr.slice(l / 2 - 1,l / 2 + 1);
  return arr.slice(Math.floor(l / 2), Math.ceil(l / 2));
};

assertEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);
assertEqual(eqArrays(middle([1, 2]), []), true);
assertEqual(eqArrays(middle([]), []), true);