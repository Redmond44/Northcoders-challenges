const expect = require('chai').expect;
const path = require('path');
const { insertNewValue } = require(path.join(__dirname, '../insertNewValue'));

describe('insertNewValue', function () {
  it('returns the same array', () => {
    const arr = [1, 2, 3];
    expect(insertNewValue(arr)).to.equal(arr);
  });
  it('returns the same array if second argument is not given', () => {
    const arr = [1, 2, 3];
    expect(insertNewValue(arr)).to.equal(arr);
  });
  it('returns an array with single element if an empty array given', () => {
    const arr = [];
    expect(insertNewValue(arr, 2)).to.eql([2]);
    expect(arr).to.eql([2]);
  });
  it('inserts the new value at the correct position', () => {
    const arr1 = [1, 4, 5, 10];
    expect(insertNewValue(arr1, 2)).to.eql([1, 2, 4, 5, 10]);
    expect(arr1).to.eql([1, 2, 4, 5, 10]);
    const arr2 = [1, 4, 5, 10];
    expect(insertNewValue(arr2, 0)).to.eql([0, 1, 4, 5, 10]);
    expect(arr2).to.eql([0, 1, 4, 5, 10]);
    const arr3 = [101, 444, 679, 1939, 1988];
    expect(insertNewValue(arr3, 2033)).to.eql([101, 444, 679, 1939, 1988, 2033]);
    expect(arr3).to.eql([101, 444, 679, 1939, 1988, 2033]);
  });
  it('adds element if this element already exists in an array', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(insertNewValue(arr, 2)).to.eql([1, 2, 2, 3, 4, 5, 6]);
    expect(arr).to.eql([1, 2, 2, 3, 4, 5, 6]);
    const arr1 = [1, 2, 3];
    expect(insertNewValue(arr1, 2)).to.eql([1, 2, 2, 3]);
    expect(arr1).to.eql([1, 2, 2, 3]);
  });
});