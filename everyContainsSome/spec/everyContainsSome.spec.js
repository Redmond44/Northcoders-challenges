var path = require('path');
var expect = require('chai').expect;

var {everyContainsSomeTest} = require(path.join(__dirname, '..', './everyContainsSome.js'));

describe('everyContainsSomeTest()', function () {
  it('returns true if no arguments', () => {
    expect(everyContainsSomeTest.every()).to.equal(true);
  });
  it('returns true if non-list argument given (no predicate)', () => {
    expect(everyContainsSomeTest.every(null)).to.equal(true);
    expect(everyContainsSomeTest.every(undefined)).to.equal(true);
    expect(everyContainsSomeTest.every(true)).to.equal(true);
    expect(everyContainsSomeTest.every(false)).to.equal(true);
    expect(everyContainsSomeTest.every(23)).to.equal(true);
    expect(everyContainsSomeTest.every(0)).to.equal(true);
  });
  it('returns true if an empty list argument given (no predicate)', () => {
    expect(everyContainsSomeTest.every({})).to.equal(true);
    expect(everyContainsSomeTest.every([])).to.equal(true);
    expect(everyContainsSomeTest.every('')).to.equal(true);
  });
  it('returns true if no falsy elements in the list (no predicate)', () => {
    expect(everyContainsSomeTest.every({a: 10})).to.equal(true);
    expect(everyContainsSomeTest.every([1, 2, 3])).to.equal(true);
    expect(everyContainsSomeTest.every('apple')).to.equal(true);
  });
});
