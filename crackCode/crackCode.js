const _ = require('underscore');

const crackCode = function (code) {
  const regex = /^(([a-z]+-)+[a-z]+)(-\d+)*\((\w+)\)$/;

  // preliminary check - if bracket-code in alphabetical order
  const bracketsCode = code.match(regex)[4];
  if (bracketsCode !== bracketsCode.split('').sort().join(''))
    return false;

  // MAIN CHECK
  const outsideBracketsCode = code.match(regex)[1].split('-');

  // count each letter
  const lettersCounter = outsideBracketsCode.reduce((acc, element) => {
    acc.push({
      occurrence: element.length,
      letter: element[0]
    });

    return acc;
  }, []);

  const sortedOccurrances = _.sortBy(_.sortBy(lettersCounter, 'letter').reverse(), 'occurrence').reverse();

  let matchingCode = '';
  for (let i = 0; i < 4; i++) {
    matchingCode += sortedOccurrances[i].letter;
  }
  matchingCode = matchingCode.split('').sort().join('');

  if (matchingCode === bracketsCode) return true;
  return false;
};

if (typeof module !== 'undefined') {
  module.exports = { crackCode };
}