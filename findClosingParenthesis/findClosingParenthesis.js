const findClosingParenthesis = function (str, n) {
  let number = 0;
  const refObj = {
    '(': 0,
    ')': 0
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' && number !== n) number++;

    if (number === n) {
      if (str[i] === '(') refObj['(']++;
      if (str[i] === ')') refObj[')']++;

      if (refObj['('] === refObj[')']) return i;
    }
  }

  return -1;
};

if (typeof module !== 'undefined') {
  module.exports = { findClosingParenthesis };
}