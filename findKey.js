const findKey = (obj, cb) => {
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (cb(obj[key])) return key;
    }
  }
};
module.exports = findKey;
