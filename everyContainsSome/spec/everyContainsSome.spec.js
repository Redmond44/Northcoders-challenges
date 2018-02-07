var path = require('path');
var expect = require('chai').expect;

var { everyContainsSomeTest } = require(path.join(__dirname, '..', './everyContainsSome.js'));

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
    expect(everyContainsSomeTest.every(NaN)).to.equal(true);
  });
  it('returns true if an empty list argument given (no predicate)', () => {
    expect(everyContainsSomeTest.every({})).to.equal(true);
    expect(everyContainsSomeTest.every([])).to.equal(true);
    expect(everyContainsSomeTest.every('')).to.equal(true);
  });
  it('returns true if no falsy elements in the list (no predicate)', () => {
    expect(everyContainsSomeTest.every({ a: 10 })).to.equal(true);
    expect(everyContainsSomeTest.every([1, 2, 3])).to.equal(true);
    expect(everyContainsSomeTest.every('apple')).to.equal(true);
  });
  it('returns false if falsy elements in the list (no predicate)', () => {
    expect(everyContainsSomeTest.every({ a: 0 })).to.equal(false);
    expect(everyContainsSomeTest.every({ a: null })).to.equal(false);
    expect(everyContainsSomeTest.every({ a: undefined })).to.equal(false);
    expect(everyContainsSomeTest.every({ a: false })).to.equal(false);
    expect(everyContainsSomeTest.every({ a: '' })).to.equal(false);
    expect(everyContainsSomeTest.every({ a: NaN })).to.equal(false);
    expect(everyContainsSomeTest.every([1, 2, 0])).to.equal(false);
    expect(everyContainsSomeTest.every([1, 2, null])).to.equal(false);
    expect(everyContainsSomeTest.every([1, 2, undefined])).to.equal(false);
    expect(everyContainsSomeTest.every([1, 2, false])).to.equal(false);
    expect(everyContainsSomeTest.every([1, 2, ''])).to.equal(false);
    expect(everyContainsSomeTest.every([1, 2, NaN])).to.equal(false);
  });
  it('returns true if all of the values in the list pass the predicate truth test', () => {
    const predicate = function (num) { return num % 2 === 0; };
    const testingArr = [2, 4, 6];
    const testingObj = { a: 0, b: 4, c: 6 };
    const testingStr = '2460';
    // expect(everyContainsSomeTest.every(testingArr, predicate)).to.equal(true);
    expect(everyContainsSomeTest.every(testingObj, predicate)).to.equal(true);
    expect(everyContainsSomeTest.every(testingStr, predicate)).to.equal(true);
  });
});
