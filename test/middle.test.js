const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays.js');

const middle = require('../middle.js');

assertEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);
assertEqual(eqArrays(middle([1, 2]), []), true);
assertEqual(eqArrays(middle([]), []), true);
