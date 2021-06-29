const expect = require('chai').expect;
const takeUntil = require('../takeUntil');

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
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

describe('#takeUntil', () => {
  it('Does numbers', () => expect(results1).eql(exp1));
  it('Does strings', () => expect(results2).eql(exp2));
});
