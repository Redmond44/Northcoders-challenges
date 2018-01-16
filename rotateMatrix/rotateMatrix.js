function rotateMatrix(matrix) {
  const numOfNestedArr = matrix.length;
  let arrLength = 0;
  if (numOfNestedArr) arrLength = matrix[0].length;

  const result = [];

  for (let i = 0; i < arrLength; i++) {
    // add an empty nested array
    result.push([]);
    for (let j = 0; j < numOfNestedArr; j++) {
      // fill nested array
      result[i][j] = matrix[numOfNestedArr - 1 - j][i];
    }
  }

  return result;
}

if (typeof module !== 'undefined') {
  module.exports = { rotateMatrix };
}