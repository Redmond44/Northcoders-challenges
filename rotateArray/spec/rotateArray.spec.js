var path = require('path');
var expect = require('chai').expect;

var { rotateArray } = require(path.join(__dirname, '..', './rotateArray.js'));

describe('rotateArray()', function () {
  it('returns unchanged array if second argument is equal 0', function () {
    expect(rotateArray([1, 2, 3], 0)).to.eql([1, 2, 3]);
  });
  it('returns array rotated x times to the right if the number is positive', function () {
    expect(rotateArray([1, 2, 3], 1)).to.eql([3, 1, 2]);
    expect(rotateArray([1, 2, 3, 4, 5], 3)).to.eql([3, 4, 5, 1, 2]);
  });
  it('returns array rotated x times to the left if the number is negative', function () {
    expect(rotateArray([1,2,3], -1)).to.eql([2,3,1]);
    expect(rotateArray([1,2,3,4,5], -3)).to.eql([4,5,1,2,3]);
  });
  it('returns unchanged array if absolute value of second argument is equal or greater than array length', function () {
    expect(rotateArray([1, 2, 3], 3)).to.eql([1, 2, 3]);
    expect(rotateArray([1, 2, 3], 7)).to.eql([1, 2, 3]);
    expect(rotateArray([1, 2, 3], -3)).to.eql([1, 2, 3]);
    expect(rotateArray([1, 2, 3], -7)).to.eql([1, 2, 3]);
  });
});
