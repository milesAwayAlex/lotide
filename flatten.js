const eqArrays = (a,b)=>a.every((e,i)=>e === b[i]);
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual,expected)) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = arr => [].concat(...arr);

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(['1', 2, ['3', 4], 5, ['6']]), ['1', 2, '3', 4, 5, '6']);
assertArraysEqual(flatten([[3, 4]]), [3, 4]);