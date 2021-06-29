const expect = require('chai').expect;
const findKey = require('../findKey');

const res = findKey(
  {
    'Blue Hill': {stars: 1},
    Akaleri: {stars: 3},
    noma: {stars: 2},
    elBulli: {stars: 3},
    Ora: {stars: 2},
    Akelarre: {stars: 3},
  },
  x => x.stars === 2
);
const exp = 'noma';
const resB = findKey({a: 2, b: 8, c: 4}, x => x % 2 !== 0);

describe('#findKey', () => {
  it('Finds the key when callback returns true', () => expect(res).equal(exp));
  it('Returns undefined when callback returns false', () =>
    expect(resB).undefined);
});
