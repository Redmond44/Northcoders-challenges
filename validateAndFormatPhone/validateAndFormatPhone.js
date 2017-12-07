var validateAndFormatPhone = function (number) {
  const validRegExp = /^(0044|\+44|0)[127]\d{9}$/;
  if (validRegExp.test(number)) return number.replace(/^0044|\+44|0/, '+44');
  return new Error('Invalid phone number');
};

if (typeof module !== 'undefined') {
  module.exports = { validateAndFormatPhone };
}