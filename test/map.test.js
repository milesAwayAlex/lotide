const expect = require('chai').expect;
const map = require('../map');

const words = ['ground', 'control', 'to', 'major', 'tom'];
const results1 = map(words, word => word[0]);
const exp1 = ['g', 'c', 't', 'm', 't'];
const numbers = [1, 2, 3];
const results2 = map(numbers, n => n ** 2);
const exp2 = [1, 4, 9];
const bools = [true, true, false];
const results3 = map(bools, b => (b ? 'yup' : 'nada'));
const exp3 = ['yup', 'yup', 'nada'];
const cases = [
  [words, results1, exp1],
  [numbers, results2, exp2],
  [bools, results3, exp3],
];

describe('#map', () =>
  cases.forEach(c =>
    it(`Returns ${c[2]} for ${c[0]}`, () => expect(c[1]).eql(c[2]))
  ));
