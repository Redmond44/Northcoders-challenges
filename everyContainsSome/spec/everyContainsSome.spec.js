var path = require('path');
var expect = require('chai').expect;

var { everyContainsSomeTest } = require(path.join(__dirname, '..', './everyContainsSome.js'));

describe('everyContainsSomeTest()', function () {
  describe('every()', function () {
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
      expect(everyContainsSomeTest.every(testingArr, predicate)).to.equal(true);
      expect(everyContainsSomeTest.every(testingObj, predicate)).to.equal(true);
      expect(everyContainsSomeTest.every(testingStr, predicate)).to.equal(true);
    });
    it('returns false if at least one of the values in the list not pass the predicate truth test', () => {
      const predicate = function (num) { return num % 2 === 0; };
      const testingArr = [2, 5, 6];
      const testingObj = { a: 0, b: 4, c: 7 };
      const testingStr = '2413';
      expect(everyContainsSomeTest.every(testingArr, predicate)).to.equal(false);
      expect(everyContainsSomeTest.every(testingObj, predicate)).to.equal(false);
      expect(everyContainsSomeTest.every(testingStr, predicate)).to.equal(false);
    });
    it('predicate takes an index as second argument', () => {
      const predicate = function (num, i) { return i == num; };
      const testingArr = [2, 5, 6];
      const testingArr1 = [0, 1, 2];
      const testingObj = { a: 0, b: 4, c: 7 };
      const testingObj1 = { a: 0, b: 1, c: 2 };
      const testingObj2 = { 0: 0, 1: 1, 2: 2 };
      const testingStr = '2413';
      const testingStr1 = '0123';
      expect(everyContainsSomeTest.every(testingArr, predicate)).to.equal(false);
      expect(everyContainsSomeTest.every(testingArr1, predicate)).to.equal(true);
      expect(everyContainsSomeTest.every(testingObj, predicate)).to.equal(false);
      expect(everyContainsSomeTest.every(testingObj1, predicate)).to.equal(false);
      expect(everyContainsSomeTest.every(testingObj2, predicate)).to.equal(true);
      expect(everyContainsSomeTest.every(testingStr, predicate)).to.equal(false);
      expect(everyContainsSomeTest.every(testingStr1, predicate)).to.equal(true);
    });
    it('predicate takes a list as third argument', () => {
      const predicate = function (num, i, list) { return num === list[i]; };
      const testingArr = [2, 5, 6];
      const testingObj = { a: 0, b: 4, c: 7 };
      const testingStr = '2413';
      expect(everyContainsSomeTest.every(testingArr, predicate)).to.equal(true);
      expect(everyContainsSomeTest.every(testingObj, predicate)).to.equal(true);
      expect(everyContainsSomeTest.every(testingStr, predicate)).to.equal(true);
    });
  });
  describe('some()', function () {
    it('returns false if no arguments', () => {
      expect(everyContainsSomeTest.some()).to.equal(false);
    });
    it('returns true if non-list argument given (no predicate)', () => {
      expect(everyContainsSomeTest.some(null)).to.equal(false);
      expect(everyContainsSomeTest.some(undefined)).to.equal(false);
      expect(everyContainsSomeTest.some(true)).to.equal(false);
      expect(everyContainsSomeTest.some(false)).to.equal(false);
      expect(everyContainsSomeTest.some(23)).to.equal(false);
      expect(everyContainsSomeTest.some(0)).to.equal(false);
      expect(everyContainsSomeTest.some(NaN)).to.equal(false);
    });
    it('returns false if an empty list argument given (no predicate)', () => {
      expect(everyContainsSomeTest.some({})).to.equal(false);
      expect(everyContainsSomeTest.some([])).to.equal(false);
      expect(everyContainsSomeTest.some('')).to.equal(false);
    });
    it('returns true if at least one truthy element in the list (no predicate)', () => {
      expect(everyContainsSomeTest.some({ a: 10 })).to.equal(true);
      expect(everyContainsSomeTest.some({ a: 10, b: 0 })).to.equal(true);
      expect(everyContainsSomeTest.some([1, 2, 3])).to.equal(true);
      expect(everyContainsSomeTest.some([0, 2, 3])).to.equal(true);
      expect(everyContainsSomeTest.some('apple')).to.equal(true);
    });
    it('returns false if no truthy elements in the list (no predicate)', () => {
      expect(everyContainsSomeTest.some({ a: 0, b: null, c: undefined, d: false, e: '', f: NaN })).to.equal(false);
      expect(everyContainsSomeTest.some([null, undefined, 0, '', NaN, false])).to.equal(false);
    });
    it('returns true if at least one of the values in the list pass the predicate truth test', () => {
      const predicate = function (num) { return num % 2 === 0; };
      const testingArr = [2, 4, 6];
      const testingArr1 = [5, 4, 6];
      const testingObj = { a: 0, b: 4, c: 6 };
      const testingObj1 = { a: 0, b: 4, c: 7 };
      const testingStr = '2460';
      const testingStr1 = '2357';
      expect(everyContainsSomeTest.some(testingArr, predicate)).to.equal(true);
      expect(everyContainsSomeTest.some(testingArr1, predicate)).to.equal(true);
      expect(everyContainsSomeTest.some(testingObj, predicate)).to.equal(true);
      expect(everyContainsSomeTest.some(testingObj1, predicate)).to.equal(true);
      expect(everyContainsSomeTest.some(testingStr, predicate)).to.equal(true);
      expect(everyContainsSomeTest.some(testingStr1, predicate)).to.equal(true);
    });
    it('returns false if all of the values in the list not pass the predicate truth test', () => {
      const predicate = function (num) { return num % 2 === 0; };
      const testingArr = [3, 5, 7];
      const testingObj = { a: 1, b: 11, c: 111 };
      const testingStr = '975';
      expect(everyContainsSomeTest.some(testingArr, predicate)).to.equal(false);
      expect(everyContainsSomeTest.some(testingObj, predicate)).to.equal(false);
      expect(everyContainsSomeTest.some(testingStr, predicate)).to.equal(false);
    });
    it('predicate takes an index as second argument', () => {
      const predicate = function (num, i) { return i == num; };
      const testingArr = [2, 5, 6];
      const testingArr1 = [0, 1, 2];
      const testingObj = { a: 0, b: 4, c: 7 };
      const testingObj1 = { a: 0, b: 1, c: 2 };
      const testingObj2 = { 0: 0, 1: 1, 2: 2 };
      const testingStr = '2413';
      const testingStr1 = '0123';
      const testingStr2 = '2419';
      expect(everyContainsSomeTest.some(testingArr, predicate)).to.equal(false);
      expect(everyContainsSomeTest.some(testingArr1, predicate)).to.equal(true);
      expect(everyContainsSomeTest.some(testingObj, predicate)).to.equal(false);
      expect(everyContainsSomeTest.some(testingObj1, predicate)).to.equal(false);
      expect(everyContainsSomeTest.some(testingObj2, predicate)).to.equal(true);
      expect(everyContainsSomeTest.some(testingStr, predicate)).to.equal(true);
      expect(everyContainsSomeTest.some(testingStr1, predicate)).to.equal(true);
      expect(everyContainsSomeTest.some(testingStr2, predicate)).to.equal(false);
    });
    it('predicate takes a list as third argument', () => {
      const predicate = function (num, i, list) { return num === list[i]; };
      const testingArr = [2, 5, 6];
      const testingObj = { a: 0, b: 4, c: 7 };
      const testingStr = '2413';
      expect(everyContainsSomeTest.some(testingArr, predicate)).to.equal(true);
      expect(everyContainsSomeTest.some(testingObj, predicate)).to.equal(true);
      expect(everyContainsSomeTest.some(testingStr, predicate)).to.equal(true);
    });
  });
});
