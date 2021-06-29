/* const assertEqual = (actual, expected) => {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✔️  Assertion passed for ${JSON.stringify(actual)}`);
  } else {
    console.log(`🔴 Assertion failed for ${JSON.stringify(actual)}`);
  }
};
 */
const findKey = (obj, cb) => {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (cb(obj[key])) return key;
    }
  }
};
module.exports = findKey;
/* const res = findKey(
  {
    'Blue Hill': {stars: 1},
    Akaleri: {stars: 3},
    noma: {stars: 2},
    elBulli: {stars: 3},
    Ora: {stars: 2},
    Akelarre: {stars: 3},
  },
  x => x.stars === 2
);
const exp = 'noma';
const resB = findKey({a: 2, b: 8, c: 4}, x => x % 2 !== 0);

assertEqual(res, exp);
assertEqual(resB, undefined);
 */
