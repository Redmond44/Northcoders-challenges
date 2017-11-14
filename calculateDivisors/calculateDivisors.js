// Please do not change the name of this function
var calculateDivisors = function (number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      sum += i;
  }
  return sum;
};

if (typeof module !== 'undefined') {
  module.exports = { calculateDivisors };
}
