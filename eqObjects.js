/* const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✔️  Assertion passed for ${JSON.stringify(actual)}`);
  } else {
    console.log(
      `🔴 Assertion failed, ${JSON.stringify(actual)} !== ${JSON.stringify(
        expected
      )}`
    );
  }
};
 */
const eqObjects = (objA, objB) => {
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
      if (eqObjects(objA[key], objB[key])) continue;
      return false;
    }
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
};
module.exports = eqObjects;
/*
const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
const abc = {a: '1', b: '2', c: '3'};
const cd = {c: '1', d: ['2', 3]};
const dc = {d: ['2', 3], c: '1'};
const cd2 = {c: '1', d: ['2', 3, 4]};
const oe = {c: '1', d: {2: [3, 5]}};
const of = {d: {2: [3, 5]}, c: '1'};
const og = {d: {2: [5, 3]}, c: '1'};

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(oe, of), true);
assertEqual(eqObjects(oe, og), false);
 */
