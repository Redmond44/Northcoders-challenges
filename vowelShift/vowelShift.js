const vowelShift = function (str, n) {
  const strArray = str.split('');
  const refVowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsInStr = {};

  strArray.forEach((char, index) => {
    if (refVowels.includes(char)) vowelsInStr[index] = char;
  });

  const vowelsPositions = Object.keys(vowelsInStr);
  const vowels = Object.values(vowelsInStr);
  const newVowelsOrder = rotateArray(vowels, n);

  vowelsPositions.forEach((position, i) => {
    strArray[position] = newVowelsOrder[i];
  });

  return strArray.join('');
};

const rotateArray = function (arr, num) {
  let newStartIndex;

  if (num >= 0) newStartIndex = arr.length - num;
  if (num < 0) newStartIndex = Math.abs(num);

  let newArr = arr.slice(newStartIndex).concat(arr.slice(0, newStartIndex));
  return newArr;
};

if (typeof module !== 'undefined') {
  module.exports = { vowelShift };
}