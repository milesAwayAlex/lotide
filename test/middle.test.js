const expect = require('chai').expect;
const middle = require('../middle.js');

const cases = [
  [[1, 2, 3, 4, 5], [3]],
  [
    [1, 2, 3, 4, 5, 6],
    [3, 4],
  ],
  [[1, 2], [], 'an empty array'],
  [[], [], 'an empty array'],
];

describe('#middle', () => {
  cases.forEach(c => {
    it(`Returns ${c[2] || c[1]} for ${c[2] || c[0]}`, () => {
      expect(middle(c[0])).eql(c[1]);
    });
  });
});
