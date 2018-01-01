const romanNumeralEncoder = function (num) {
  if (typeof num !== 'number') return '';
  const ref = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let roman = '';

  for (let char in ref) {
    while (num >= ref[char]) {
      roman += char;
      num -= ref[char];
    }
  }
  return roman;
};

if (typeof module !== 'undefined') {
  module.exports = { romanNumeralEncoder };
}