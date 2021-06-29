const takeUntil = (arr, cb) => {
  const res = [];
  for (const e of arr) {
    if (cb(e)) break;
    res.push(e);
  }
  return res;
};
module.exports = takeUntil;
