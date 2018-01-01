const expect = require('chai').expect;
const { subArrSum } = require('../subArrSum');

describe('subArrSum', function () {
  it('returns zero for an empty array', () => {
    expect(subArrSum([])).to.equal(0);
  });
  it('returns zero if only negative elements', () => {
    expect(subArrSum([-2, -8, -3])).to.equal(0);
  });
  it('returns element if only one positive element', () => {
    expect(subArrSum([8])).to.equal(8);
  });
  it('returns the sum of the whole array if only positive numbers', () => {
    expect(subArrSum([8, 3, 4])).to.equal(15);
  });
  it('returns the maximum sum of any subsequence of consecutive numbers in an array', () => {
    expect(subArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to.equal(6);
    expect(subArrSum([9, 8, 7, -3, 6, 5, 4, -3, 2, 1])).to.equal(36);
    expect(subArrSum([5, -6, 2, 9, -4, -3, 8, -10, 20])).to.equal(22);    
  });
});