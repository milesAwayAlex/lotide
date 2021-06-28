const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');

const originalArray = ['one', 'two', 'three'];

assertEqual(tail(originalArray), ['two', 'three']);
assertEqual(originalArray.length, 3);
assertEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
assertEqual(tail([]), []);
