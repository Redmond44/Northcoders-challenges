const path = require('path');
const { expect } = require('chai');
const { calculateDivisors } = require(path.join(__dirname, '..', './calculateDivisors.js'));

describe('calculateDivisors()', function () {
  it('return 0 for numbers less than 4', function () {
    expect(calculateDivisors(1)).to.equal(0);
    expect(calculateDivisors(3)).to.equal(0);
  });
  it('return 3 for numbers less than 6', function () {
    expect(calculateDivisors(5)).to.equal(3);
  });
  it('return sum of the all multiples of three and five below a given number', function () {
    expect(calculateDivisors(6)).to.equal(8);
    expect(calculateDivisors(10)).to.equal(23);
    expect(calculateDivisors(12)).to.equal(33);
    expect(calculateDivisors(15)).to.equal(45);
  });
});