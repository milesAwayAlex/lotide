const assertEqual = function(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✔️  Assertion passed for ${JSON.stringify(actual)}`);
  } else {
    console.log(`🔴 Assertion failed for ${JSON.stringify(actual)}`);
  }
};

const findKeyByValue = (obj, val) => {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (obj[key] === val) return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
