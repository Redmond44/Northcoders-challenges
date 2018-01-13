const findClosingParenthesis = function (str, n) {
  let currentParenthesis = 0;
  const countingObj = {
    '(': 0,
    ')': 0
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' && currentParenthesis !== n) currentParenthesis++;

    if (currentParenthesis === n) {
      if (str[i] === '(') countingObj['(']++;
      if (str[i] === ')') countingObj[')']++;

      if (countingObj['('] === countingObj[')']) return i;
    }
  }

  return -1;
};

if (typeof module !== 'undefined') {
  module.exports = { findClosingParenthesis };
}