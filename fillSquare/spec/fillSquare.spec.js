const { expect } = require('chai');
const { fillSquare } = require('../fillSquare');

describe('fillSquare', function () {
  it('returns the same array if it is a square', () => {
    expect(fillSquare([[1]])).to.eql([[1]]);
    expect(fillSquare([[1, 2], [3, 4]])).to.eql([[1, 2], [3, 4]]);
  });
  it('adds null if more nested arrays than elements', () => {
    const arr = [[1], [3]];
    expect(fillSquare(arr)).to.eql([[1, null], [3, null]]);
  });
  it('adds extra sub-arrays if needed', () => {
    const arr = [[1, 2, 3]];
    const expected = [[1, 2, 3], [null, null, null], [null, null, null]];
    expect(fillSquare(arr)).to.eql(expected);
  });
  it('returns square matrix with the value null standing in for any blank positions', () => {
    const arr = [
      [0, 2, 3],
      [1, 2],
      [1]
    ];
    const expected = [
      [0, 2, 3],
      [1, 2, null],
      [1, null, null]
    ];
    expect(fillSquare(arr)).to.eql(expected);

    const arr1 = [
      [1, 2, 3],
      [1, 2, 3, 4, 5, 6],
      [1]
    ];
    const expected1 = [
      [1, 2, 3, null, null, null],
      [1, 2, 3, 4, 5, 6],
      [1, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null]
    ];
    expect(fillSquare(arr1)).to.eql(expected1);

    const arr2 = [
      [1, 2, 3],
      [1, 2, 3],
      [1],
      [],
      [1, 2, 3],
      [1]
    ];
    const expected2 = [
      [1, 2, 3, null, null, null],
      [1, 2, 3, null, null, null],
      [1, null, null, null, null, null],
      [null, null, null, null, null, null],
      [1, 2, 3, null, null, null],
      [1, null, null, null, null, null]
    ];
    expect(fillSquare(arr2)).to.eql(expected2);
  });
});