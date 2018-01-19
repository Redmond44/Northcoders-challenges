const { expect } = require('chai');
const { multiplicationTable } = require('../multiplicationTable');

describe('multiplicationTable', function () {
  it('returns an empty array if number not given', () => {
    expect(multiplicationTable()).to.eql([]);
  });
  it('returns single nested array if number equal 0', () => {
    expect(multiplicationTable(0)).to.eql([[0]]);
  });
  it('returns a nested array representation of the multiplication table', () => {
    const expected = [
      [0, 1],
      [1, 1]
    ];
    expect(multiplicationTable(1)).to.eql(expected);
    const expected1 = [
      [0, 1, 2, 3],
      [1, 1, 2, 3],
      [2, 2, 4, 6],
      [3, 3, 6, 9]
    ];
    expect(multiplicationTable(3)).to.eql(expected1);
    const expected2 = [
      [0, 1, 2, 3, 4, 5],
      [1, 1, 2, 3, 4, 5],
      [2, 2, 4, 6, 8, 10],
      [3, 3, 6, 9, 12, 15],
      [4, 4, 8, 12, 16, 20],
      [5, 5, 10, 15, 20, 25]
    ];
    expect(multiplicationTable(5)).to.eql(expected2);
  });
});