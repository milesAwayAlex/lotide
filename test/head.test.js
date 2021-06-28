const assert = require('chai').assert;
const head = require('../head.js');

const cases = [
  [[5, 6, 7], 5],
  [['Hello', 'Lighthouse', 'Labs'], 'Hello'],
  [[], undefined, 'an empty array'],
];

describe('#head', () => {
  it('returns 1 for [1,2,3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  cases.forEach(c => {
    it(`returns ${c[1]} for ${c[2] || c[0]}`, () => {
      assert.strictEqual(head(c[0]), c[1]);
    });
  });
});
