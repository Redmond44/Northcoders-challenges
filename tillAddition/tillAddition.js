// Please do not change the name of this function
var tillAddition = function (till) {
  let result = 0;
  for (let prop in till) {
    let value = prop.match(/\d+/);
    if (prop.includes('p')) result += value[0] * till[prop] / 100;
    if (prop.includes('£')) result += value[0] * till[prop];
  }
  return `£${result.toFixed(2)}`;
};

if (typeof module !== 'undefined') {
  module.exports = { tillAddition };
}
