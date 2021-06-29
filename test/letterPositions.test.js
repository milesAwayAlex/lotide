const expect = require('chai').expect;
const letterPositions = require('../letterPositions');

const cases = [
  ['hello', {h: [0], e: [1], l: [2, 3], o: [4]}],
  [
    'lighthouse in the house',
    {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12],
    },
  ],
];

describe('#letterPositions', () =>
  cases.forEach(c =>
    it(`Returns ${JSON.stringify(c[1])} for ${c[0]}`, () =>
      expect(letterPositions(c[0])).eql(c[1]))
  ));
