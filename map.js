const assertEqual = (actual, expected) => {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✔️  Assertion passed for ${JSON.stringify(actual)}`);
  } else {
    console.log(`🔴 Assertion failed for ${JSON.stringify(actual)}`);
  }
};

const map = (arr, cb) => {
  const res = [];
  for (const i of arr) {
    res.push(cb(i));
  }
  return res;
};

const words = ['ground', 'control', 'to', 'major', 'tom'];
const results1 = map(words, word => word[0]);
const exp1 = ['g', 'c', 't', 'm', 't'];
const numbers = [1, 2, 3];
const results2 = map(numbers, n => n ** 2);
const exp2 = [1, 4, 9];
const bools = [true, true, false];
const results3 = map(bools, b => (b ? 'yup' : 'nada'));
const exp3 = ['yup', 'yup', 'nada'];
assertEqual(results1, exp1);
assertEqual(results2, exp2);
assertEqual(results3, exp3);
