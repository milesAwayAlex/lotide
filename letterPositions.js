const letterPositions = s => {
  const res = s.split('').reduce((res, e, i) => {
    // skip whitespace
    if (e === ' ') return res;
    if (!res[e]) res[e] = [];
    res[e].push(i);
    return res;
  }, {});
  return res;
};
module.exports = letterPositions;
