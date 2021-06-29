const expect = require('chai').expect;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sciFi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire',
};
const cases = [
  [findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama'],
  [findKeyByValue(bestTVShowsByGenre, 'The Expanse'), 'sciFi'],
  [findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined],
];

describe('#findKeyByValue', () =>
  it('Finds the key when there is one', () =>
    cases.forEach(c => expect(c[0]).equal(c[1]))));
