const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✔️  Assertion passed for ${JSON.stringify(actual)}`);
  } else {
    console.log(`🔴 Assertion failed for ${JSON.stringify(actual)}`);
  }
};

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual('string', 'string');
assertEqual(1, 1);
assertEqual(2, '2');
