const findMostRepeated = function (arr) {
  const countingObj = {};

  arr.forEach(element => {
    if (!countingObj[element]) countingObj[element] = 1;
    else countingObj[element]++;
  });

  let repeats = Math.max(...Object.values(countingObj));
  if (repeats < 2) repeats = null;
  const elements = Object.keys(countingObj).filter(key => countingObj[key] === repeats);

  return { elements, repeats };
};

if (typeof module !== 'undefined') {
  module.exports = { findMostRepeated };
}