function parseHexInt(hex) {
  const refObj = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  };
  let result = 0;

  hex.split('').reverse().forEach((char, index) => {
    if (isNaN(+char)) {
      char = char.toUpperCase();
      char = refObj[char];
    }
    result += Math.pow(16, index) * char;
  });
  return result;
}

module.exports = { parseHexInt };