const assertEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✔️  Assertion passed for ${JSON.stringify(actual)}`);
  } else {
    console.log(`🔴 Assertion failed, ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};
const eqObjects = (objA, objB) => {
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (typeof objA[key] === 'object' && objA[key] !== null
    && typeof objB[key] === 'object' && objB[key] !== null) {
      if (eqObjects(objA[key], objB[key])) continue;
      return false;
    }
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
};

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b: "2", c: "3"};
const cd = {c: "1", d: ["2", 3]};
const dc = {d: ["2", 3], c: "1"};
const cd2 = {c: "1", d: ["2", 3, 4]};
const oe = {c: "1", d: {2: [3, 5]}};
const of = {d: {2: [3, 5]}, c: "1"};
const og = {d: {2: [5, 3]}, c: "1"};

console.log('PASS');
assertEqual(ab, ba);
console.log('FAIL');
assertEqual(ab, abc);
console.log('PASS');
assertEqual(cd, dc);
console.log('FAIL');
assertEqual(cd, cd2);
console.log('PASS');
assertEqual(oe, of);
console.log('FAIL');
assertEqual(oe, og);
