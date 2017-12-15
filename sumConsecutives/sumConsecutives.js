var sumConsecutives = function (arr) {
  let newArr = [];
  let currentNum = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === currentNum) sum += arr[i];
    else {
      currentNum = arr[i];
      newArr.push(sum);
      sum = arr[i];
    }
    if (i === arr.length - 1) newArr.push(sum);
  }

  return newArr;
};

function reduceConsecutives(arr) {
  const finalArr = sumConsecutives(arr);

  if (finalArr.length === arr.length) return finalArr;
  return reduceConsecutives(finalArr);
}

if (typeof module !== 'undefined') {
  module.exports = { sumConsecutives, reduceConsecutives };
}
