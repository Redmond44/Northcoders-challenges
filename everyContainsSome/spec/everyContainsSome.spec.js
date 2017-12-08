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
});
