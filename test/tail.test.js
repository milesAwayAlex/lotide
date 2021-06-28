const expect = require('chai').expect;
const tail = require('../tail.js');

const originalArray = ['one', 'two', 'three'];
const cases = [
  [originalArray, ['two', 'three']],
  [
    ['Hello', 'Lighthouse', 'Labs'],
    ['Lighthouse', 'Labs'],
  ],
  [[], [], 'an empty array'],
];

describe('#tail', () => {
  cases.forEach(c => {
    it(`Returns ${c[2] || c[1]} for ${c[2] || c[0]}`, () => {
      expect(tail(c[0])).eql(c[1]);
    });
  });
  it('Does not modify the original array', () => {
    expect(originalArray).lengthOf(3);
  });
});
