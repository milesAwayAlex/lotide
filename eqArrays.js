const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (objA, objB) => {
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (
      typeof objA[key] === 'object' &&
      objA[key] !== null &&
      typeof objB[key] === 'object' &&
      objB[key] !== null
    ) {
      if (eqArrays(objA[key], objB[key])) continue;
      return false;
    }
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([[[1, [2, [3]]]]], [[[1, [2, [3]]]]]), true);
assertEqual(eqArrays(['1', [[['2', ['3']]]]], ['1', [[['2', [3]]]]]), false);
assertEqual(eqArrays(['3'], [3]), false);
