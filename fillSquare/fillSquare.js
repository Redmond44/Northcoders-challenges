function fillSquare(nestedArr) {
  let maxLength = nestedArr.length;
  // looking for the maximum side of the square
  for (let i = 0; i < nestedArr.length; i++) {
    const length = nestedArr[i].length;
    if (length > maxLength) maxLength = length;
  }
  // making a square
  for (let j = 0; j < maxLength; j++) {
    if (!nestedArr[j]) nestedArr.push([]);
    for (let i = 0; i < maxLength; i++) {
      if (nestedArr[j][i] === undefined) nestedArr[j][i] = null;
    }
  }

  return nestedArr;
}

module.exports = { fillSquare };