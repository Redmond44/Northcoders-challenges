const crackCode = function (code) {
  const regex = /^(([a-z]+-)+[a-z]+)(-\d+)*\((\w+)\)$/;

  // preliminary check
  const bracketsCode = code.match(regex)[4];
  if (bracketsCode !== bracketsCode.split('').sort().join(''))
    return false;

  // MAIN CHECK
  const outsideBracketsCode = code.match(regex)[1].split('-');

  // specify the number of occurrences of each letter
  const lettersCounter = outsideBracketsCode.reduce((acc, element) => {
    if (acc[element.length])
      acc[element.length] += element[0];
    else
      acc[element.length] = element[0];

    return acc;
  }, {});

  // find the greatest occurrence
  const keys = Object.keys(lettersCounter);
  const theMostCommon = Math.max(...keys);

  // construct the correct code
  let matchingCode = '';
  let i = theMostCommon;

  do {
    if (lettersCounter[i])
      matchingCode += lettersCounter[i].split('').sort().join('');
    i--;
  } while (matchingCode.length < 4);

  matchingCode = matchingCode.slice(0, 4).split('').sort().join('');

  if (matchingCode === bracketsCode) return true;

  return false;
};

if (typeof module !== 'undefined') {
  module.exports = { crackCode };
}