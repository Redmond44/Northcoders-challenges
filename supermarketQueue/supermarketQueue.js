function queueTime(arr, num) {
  const checkoutTills = arr.splice(0, num);

  for (let i = 0; i < arr.length; i++) {
    let minTime = Math.min(...checkoutTills);
    let minTimeIndex = checkoutTills.indexOf(minTime);
    checkoutTills[minTimeIndex] += arr[i];
  }
  return Math.max(...checkoutTills);
}

module.exports = { queueTime };