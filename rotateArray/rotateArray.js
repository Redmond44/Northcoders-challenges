var rotateArray = function (arr, num) {
  let newStartIndex;

  if (num >= 0) newStartIndex = arr.length - num;
  if (num < 0) newStartIndex = Math.abs(num);

  let newArr = arr.slice(newStartIndex).concat(arr.slice(0, newStartIndex));
  return newArr;
};

if (typeof module !== 'undefined') {
  module.exports = { rotateArray };
}