/* const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✔️  Assertion passed for ${JSON.stringify(actual)}`);
  } else {
    console.log(`🔴 Assertion failed for ${JSON.stringify(actual)}`);
  }
};
 */
const letterPositions = s => {
  const res = s.split('').reduce((res, e, i) => {
    // skip whitespace
    if (e === ' ') return res;
    if (!res[e]) res[e] = [];
    res[e].push(i);
    return res;
  }, {});
  return res;
};
module.exports = letterPositions;
/*
assertEqual(letterPositions('hello'), {h: [0], e: [1], l: [2, 3], o: [4]});
assertEqual(letterPositions('lighthouse in the house'), {l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12]});
 */
