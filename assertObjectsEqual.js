const eqObjects = require('./eqObjects');

const assertEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✔️  Assertion passed for ${JSON.stringify(actual)}`);
  } else {
    console.log(
      `🔴 Assertion failed, ${JSON.stringify(actual)} !== ${JSON.stringify(
        expected
      )}`
    );
  }
};
module.exports = assertEqual;
