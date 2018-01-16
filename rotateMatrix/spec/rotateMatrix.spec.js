const path = require('path');
const expect = require('chai').expect;

const { rotateMatrix } = require(path.join(__dirname, '..', './rotateMatrix.js'));

describe('rotateMatrix', function () {
  it('returns an empty array if an empty array given', () => {
    expect(rotateMatrix([])).to.eql([]);
  });
  it('returns unchanged array for one nested array with single element', () => {
    expect(rotateMatrix([[3]])).to.eql([[3]]);
  });
  it('returns two nested arrays for one nested array with two elements', () => {
    expect(rotateMatrix([[3, 4]])).to.eql([[3], [4]]);
  });
  it('works for square matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ];
    expect(rotateMatrix(matrix)).to.eql(expected);
  });
  it('works for rectangular matrix', () => {
    const matrix = [
      [1, 2, 3, 5, 10, 1],
      [3, 3, 1, 1, 3, 6],
      [1, 6, 3, 2, 2, 1]
    ];
    const expected = [
      [1, 3, 1],
      [6, 3, 2],
      [3, 1, 3],
      [2, 1, 5],
      [2, 3, 10],
      [1, 6, 1]
    ];
    expect(rotateMatrix(matrix)).to.eql(expected);
  });
});