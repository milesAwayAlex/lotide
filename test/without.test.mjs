import {expect} from 'chai';
import without from '../without.js';

const words = ['hello', 'world', 'lighthouse'];
const cases = [
  [without([1, 2, 3], [1]), [2, 3]],
  [without(['1', '2', '3'], [1, 2, '3']), ['1', '2']],
  [without(words, ['lighthouse']), ['hello', 'world']],
  [
    words,
    ['hello', 'world', 'lighthouse'],
    'Does not modify the original array',
  ],
];

describe('#without', () =>
  cases.forEach(c =>
    it(c[2] || `Returs ${c[1]}`, () => expect(c[0]).eql(c[1]))
  ));
