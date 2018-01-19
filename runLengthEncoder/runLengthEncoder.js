function runLengthEncoder(data) {
  const colours = [];
  let result = [];

  for (let i = 0; i < data.length; i += 4) {
    colours.push(data.slice(i, i + 4));
  }
  for (let j = 0; j < colours.length; j++) {
    colours[j].unshift(1);
    if (!colours[j].equals(colours[j - 1])) result.push(colours[j]);
    else result[result.length - 1][0]++;
  }
  result = result.reduce((acc, element) => acc = acc.concat(element));
  return result;
}

Array.prototype.equals = function (array) {
  if (!Array.isArray(array)) return false;
  if (this.length !== array.length) return false;

  for (let i = 0; i < this.length; i++) {
    if (this[i] !== array[i]) {
      return false;
    }
  }
  return true;
};

module.exports = { runLengthEncoder };