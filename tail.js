const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = arr => arr.slice(1);

const originalArray = ['one', 'two', 'three'];

assertEqual(tail(originalArray), ['two', 'three']);
assertEqual(originalArray.length, 3);
assertEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
assertEqual(tail([]), []);