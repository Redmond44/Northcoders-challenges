function subArrSum(arr) {
  let maxTotal = 0;
  let currentTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      for (let j = i; j < arr.length; j++) {
        currentTotal += arr[j];
        if (currentTotal > maxTotal) maxTotal = currentTotal;
      }
      currentTotal = 0;
    }
  }
  return maxTotal;
}

module.exports = { subArrSum };