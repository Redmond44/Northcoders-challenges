const simplifyDirections = function (arr) {
  const result = [];
  const refObj = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    WEST: 'EAST',
    EAST: 'WEST'
  };

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(refObj[arr[i]])) {
      const index = arr.indexOf(refObj[arr[i]]);
      arr.splice(index, 1);
    }
    else result.push(arr[i]);
  }

  return result;
};

if (typeof module !== 'undefined') {
  module.exports = { simplifyDirections };
}