const countLetters = s => {
  const res = {};
  for (const l of s.replace(/\s/g, '')) {
    if (!res[l]) res[l] = 0;
    res[l]++;
  }
  return res;
};
module.exports = countLetters;
