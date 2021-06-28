const middle = arr => {
  const l = arr.length;
  if (l < 3) return [];
  if (l % 2 === 0) return arr.slice(l / 2 - 1, l / 2 + 1);
  return arr.slice(Math.floor(l / 2), Math.ceil(l / 2));
};

module.exports = middle;
