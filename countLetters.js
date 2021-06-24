const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (s) => {
  const res = {};
  for (const l of s.replace(/\s/g, '')) {
    if (!res[l]) res[l] = 0;
    res[l]++;
  }
  return res;
};

assertEqual(JSON.stringify(countLetters('LHL')), JSON.stringify({L: 2, H: 1}));
assertEqual(JSON.stringify(countLetters('LHL lhl LHL')), JSON.stringify({L: 4, H: 2, l: 2, h: 1}));
