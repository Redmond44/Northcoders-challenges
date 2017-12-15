var path = require('path');
var expect = require('chai').expect;

var { sumConsecutives, reduceConsecutives } = require(path.join(__dirname, '..', './sumConsecutives.js'));

describe('sumConsecutives()', function () {
  it('returns new array', () => {
    const arr = [1, 1, 1];
    sumConsecutives(arr);
    expect(arr).to.eql([1, 1, 1]);
  });
  it('returns exact copy of an array if no consecutive numbers', () => {
    expect(sumConsecutives([1, 2, 3])).to.eql([1, 2, 3]);
  });
  it('sums all numbers if all are consecutive', () => {
    expect(sumConsecutives([1, 1, 1])).to.eql([3]);
  });
  it('sums all the consecutive numbers in an array and pushes them into a new array', () => {
    expect(sumConsecutives([1, 1, 2, 3])).to.eql([2, 2, 3]);
    expect(sumConsecutives([1, 1, 2, 2, 3, 3])).to.eql([2, 4, 6]);
    expect(sumConsecutives([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1])).to.eql([2, 2, 4, 2, 3]);
  });
});

describe('reduceConsecutives()', function () {
  it('reduces the array down to a single value made off adding the array elements together once the array has no consecutive numbers', () => {
    expect(reduceConsecutives([1,1,2,1,1,1,1,2,1,1,1])).to.eql([8, 2, 3]);
  });
});
