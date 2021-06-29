const expect = require('chai').expect;
const eqObjects = require('../eqObjects');

const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
const abc = {a: '1', b: '2', c: '3'};
const cd = {c: '1', d: ['2', 3]};
const dc = {d: ['2', 3], c: '1'};
const cd2 = {c: '1', d: ['2', 3, 4]};
const oe = {c: '1', d: {2: [3, 5]}};
const of = {d: {2: [3, 5]}, c: '1'};
const og = {d: {2: [5, 3]}, c: '1'};
const cases = [
  [eqObjects(ab, ba), true],
  [eqObjects(ab, abc), false],
  [eqObjects(cd, dc), true],
  [eqObjects(cd, cd2), false],
  [eqObjects(oe, of), true],
  [eqObjects(oe, og), false],
];

describe('#eqObjects', () =>
  it('Compares the objects', () =>
    cases.forEach(c => expect(c[0]).equal(c[1]))));
