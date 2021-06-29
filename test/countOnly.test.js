const expect = require('chai').expect;
const countOnly = require('../countOnly');

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe',
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});
const cases = [
  [result1['Jason'], 1],
  [result1['Karima'], undefined],
  [result1['Fang'], 2],
  [result1['Agouhanna'], undefined],
];
describe('#countOnly', () =>
  it('Returns the correct object', () =>
    cases.forEach(c => expect(c[0]).equal(c[1]))));
