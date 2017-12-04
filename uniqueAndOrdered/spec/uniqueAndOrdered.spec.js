var expect = require('chai').expect;
var {uniqueAndOrdered} = require('../uniqueAndOrdered');

describe('uniqueAndOrdered', function () {
  it('is a function', function () {
    expect(uniqueAndOrdered).to.be.a('function');
  });
  it('returns the same array if all elements are unique', function () {
    expect(uniqueAndOrdered([1, 2, 3, 1])).to.eql([1, 2, 3, 1]);
  });
  it('returns an array of letters if all letters are unique', function () {
    expect(uniqueAndOrdered('abc')).to.eql(['a', 'b', 'c']);
  });
  it('returns an array of unique elements in the same order', function () {
    expect(uniqueAndOrdered([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 1, 1])).to.eql([1, 2, 3, 1]);
  });
  it('returns an array of unique letters in the same order', function () {
    expect(uniqueAndOrdered('nnoorrtthhccooddeerrss')).to.eql(['n', 'o', 'r', 't', 'h', 'c', 'o', 'd', 'e', 'r', 's']);
  });
  it('case sensitive', function () {
    expect(uniqueAndOrdered('AaAAABBBCCCc')).to.eql(['A', 'a', 'A', 'B', 'C', 'c']);
  });
});
