const expect = require('chai').expect;
const flatten = require('../flatten');

const cases = [
  [flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]],
  [flatten(['1', 2, ['3', 4], 5, ['6']]), ['1', 2, '3', 4, 5, '6']],
  [flatten([[3, 4]]), [3, 4]],
];

describe('#flatten', () =>
  cases.forEach(c => it(`Returns ${c[1]}`, () => expect(c[0]).eql(c[1]))));
