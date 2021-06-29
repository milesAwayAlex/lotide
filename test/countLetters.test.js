const countLetters = require('../countLetters');
const expect = require('chai').expect;

const cases = [
  ['LHL', {L: 2, H: 1}],
  ['LHL lhl LHL', {L: 4, H: 2, l: 2, h: 1}],
];

describe('#countLetters', () => {
  cases.forEach(c => {
    it(`Returns ${JSON.stringify(c[1])} for ${c[0]}`, () =>
      expect(countLetters(c[0])).eql(c[1]));
  });
});
