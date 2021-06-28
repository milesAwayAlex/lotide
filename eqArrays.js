const eqArrays = (objA, objB) => {
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (
      typeof objA[key] === 'object' &&
      objA[key] !== null &&
      typeof objB[key] === 'object' &&
      objB[key] !== null
    ) {
      if (eqArrays(objA[key], objB[key])) continue;
      return false;
    }
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
