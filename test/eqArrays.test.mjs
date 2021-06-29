import {expect} from 'chai';
import eqArrays from '../eqArrays.js';

const cases = [
  [[1, 2, 3], [1, 2, 3], true],
  [[[[1, [2, [3]]]]], [[[1, [2, [3]]]]], true],
  [['1', [[['2', ['3']]]]], ['1', [[['2', [3]]]]], false],
  [['3'], [3], false],
];

describe('#eqArrays', () =>
  cases.forEach(c =>
    it(`Returns ${c[2]} for ${JSON.stringify(c[0])} and ${JSON.stringify(
      c[1]
    )}`, () => expect(eqArrays(c[0], c[1])).equal(c[2]))
  ));
