const map = (arr, cb) => {
  const res = [];
  for (const i of arr) {
    res.push(cb(i));
  }
  return res;
};
module.exports = map;
