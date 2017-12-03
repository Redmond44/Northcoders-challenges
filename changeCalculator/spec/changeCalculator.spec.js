var expect = require('chai').expect;

var { changeCalculator } = require('../changeCalculator');

describe('changeCalculator()', function () {
  it('return an empty object if no change', function () {
    expect(changeCalculator(0)).to.eql({});
  });
  it('return an object with one property if one-coin change', function () {
    expect(changeCalculator(1)).to.eql({ '1': 1 });
    expect(changeCalculator(2)).to.eql({ '2': 1 });
    expect(changeCalculator(5)).to.eql({ '5': 1 });
  });
  it('return an object with more properties (but values equal 1)', function () {
    expect(changeCalculator(3)).to.eql({ '1': 1, '2': 1 });
    expect(changeCalculator(7)).to.eql({ '5': 1, '2': 1 });
    expect(changeCalculator(13)).to.eql({ '10': 1, '2': 1, '1': 1 });
  });
  it('return an object with more properties', function () {
    expect(changeCalculator(4)).to.eql({ '2': 2 });
    expect(changeCalculator(9)).to.eql({ '5': 1, '2': 2 });
    expect(changeCalculator(99)).to.eql({ '50': 1, '20': 2, '5': 1, '2': 2 });
  });
  it('works for £1 and £2', function () {
    expect(changeCalculator(100)).to.eql({ '£1': 1 });
    expect(changeCalculator(200)).to.eql({ '£2': 1 });
    expect(changeCalculator(399)).to.eql({ '£2': 1, '£1': 1, '50': 1, '20': 2, '5': 1, '2': 2 });
  });
});
