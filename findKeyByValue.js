const findKeyByValue = (obj, val) => {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (obj[key] === val) return key;
    }
  }
};
module.exports = findKeyByValue;
