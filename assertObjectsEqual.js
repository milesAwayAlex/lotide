const eqObjects = require('./eqObjects');

const assertEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✔️  Assertion passed for ${JSON.stringify(actual)}`);
  } else {
    console.log(
      `🔴 Assertion failed, ${JSON.stringify(actual)} !== ${JSON.stringify(
        expected
      )}`
    );
  }
};
module.exports = assertEqual;
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
const oh = {d: {2: [5, 3]}, c: '2'};
// const aa = 5;
// const bb = 6;

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
console.log('FAIL');
assertEqual(og, oh);
// console.log('ERROR');
// assertEqual(aa, bb);
 */
