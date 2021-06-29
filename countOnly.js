const countOnly = function(allItems, itemsToCount) {
  const res = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (!res[item]) res[item] = 0;
      res[item]++;
    }
  }
  return res;
};
module.exports = countOnly;
