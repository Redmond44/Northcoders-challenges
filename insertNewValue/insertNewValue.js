function insertNewValue(arr, num) {
  const length = arr.length;

  if (num === undefined) return arr;
  if (!arr.length || num > arr[arr.length - 1]) arr.push(num);
  else if (num < arr[0]) arr.unshift(num);

  let maxIndex = arr.length - 1;
  let minIndex = 0;
  let middle;

  while (length === arr.length) {
    middle = Math.floor((maxIndex + minIndex) / 2);

    if (num <= arr[middle]) {
      if (num === arr[middle] || num >= arr[middle - 1]) arr.splice(middle, 0, num);
    }
    else {
      if (num <= arr[middle + 1]) arr.splice(middle + 1, 0, num);
    }
    minIndex = middle;
  }
  return arr;
}

module.exports = { insertNewValue };