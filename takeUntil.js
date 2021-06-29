/* const assertEqual = (actual, expected) => {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✔️  Assertion passed for ${JSON.stringify(actual)}`);
  } else {
    console.log(`🔴 Assertion failed for ${JSON.stringify(actual)}`);
  }
}; */

const takeUntil = (arr, cb) => {
  const res = [];
  for (const e of arr) {
    if (cb(e)) break;
    res.push(e);
  }
  return res;
};
module.exports = takeUntil;
/* const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = [
  "I've",
  'been',
  'to',
  'Hollywood',
  ',',
  "I've",
  'been',
  'to',
  'Redwood',
];
const results2 = takeUntil(data2, x => x === ',');
const exp1 = [1, 2, 5, 7, 2];
const exp2 = ["I've", 'been', 'to', 'Hollywood'];

assertEqual(results1, exp1);
assertEqual(results2, exp2);
 */
