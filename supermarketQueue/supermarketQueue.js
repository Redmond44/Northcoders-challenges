function queueTime(arr, num) {
  // slice better than splice - doesn't change original array
  const checkoutTills = arr.slice(0, num);

  for (let i = num; i < arr.length; i++) {
    let minTime = Math.min(...checkoutTills);
    let minTimeIndex = checkoutTills.indexOf(minTime);
    checkoutTills[minTimeIndex] += arr[i];
  }
  return Math.max(...checkoutTills);
}

module.exports = { queueTime };