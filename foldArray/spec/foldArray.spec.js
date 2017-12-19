const expect = require('chai').expect;
const { foldArray } = require('../foldArray');

describe('foldArray', function () {
  it('returns the same array if second argument is not given', () => {
    expect(foldArray([1, 2, 3])).to.eql([1, 2, 3]);
  });
  it('returns an empty array for an empty array', () => {
    expect(foldArray([], 1)).to.eql([], 1);
  });
  it('returns the same array if one element', () => {
    expect(foldArray([1], 1)).to.eql([1]);
  });
  it('folds all integers if the array has an even length', () => {
    expect(foldArray([1, 2], 1)).to.eql([3]);
    expect(foldArray([1, 2, 3, 10, 34, 100], 1)).to.eql([101, 36, 13]);
  });
  it('fold on the middle index if the array has an odd length', () => {
    expect(foldArray([1, 2, 3], 1)).to.eql([4, 2]);
  });
  it('works for num greater than one', () => {
    expect(foldArray([1, 2, 3, 10, 34, 100], 2)).to.eql([114, 36]);
    expect(foldArray([1, 2, 3, 10, 34, 100], 3)).to.eql([150]);
    expect(foldArray([1, 2, 3, 10, 34, 100], 4)).to.eql([150]);
    expect(foldArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).to.eql([15, 20, 10]);
  });
});