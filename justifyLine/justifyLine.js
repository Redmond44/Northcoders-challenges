function justifyLine(str, num) {
  if (str.length > num) return 'String exceeds maximum line length.';

  const spacesToAdd = num - str.length;
  const wordsArr = str.split(' ');
  let wordsToChange = wordsArr.slice(0, -1);

  // looking for fixed number of spaces after each word
  const numOfSpacesForEach = Math.floor(spacesToAdd / wordsToChange.length);
  const spacesForEach = ' '.repeat(numOfSpacesForEach);
  // adding fixed spaces
  wordsToChange = wordsToChange.map(word => {
    return word += spacesForEach;
  });
  // adding remaining spaces
  const additionalSpaces = spacesToAdd % wordsToChange.length;
  for (let j = 0; j < additionalSpaces; j++) {
    wordsToChange[j] += ' ';
  }

  return `${wordsToChange.join(' ')} ${wordsArr.slice(-1)}`;
}

module.exports = { justifyLine };