function multiplicationTable(n) {
  const result = [];

  for (let i = 0; i <= n; i++) {
    result.push([]);
    for (let j = 0; j <= n; j++) {
      if (i === 0) result[i][j] = j;
      else if (j === 0) result[i][j] = i;
      else result[i][j] = result[0][j] * result[i][0];
    }
  }

  return result;
}

module.exports = { multiplicationTable };