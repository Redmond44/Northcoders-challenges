function foldArray(arr, num) {
  if (!num) return arr;

  const middle = arr.length / 2 - 1;
  const newArr = [];

  for (let i = 0; i <= middle; i++) {
    newArr.push(arr[i] + arr[arr.length - 1 - i]);
  }
  if (middle !== Math.floor(middle)) newArr.push(arr[Math.floor(middle) + 1]);

  return foldArray(newArr, num - 1);
}

module.exports = { foldArray };