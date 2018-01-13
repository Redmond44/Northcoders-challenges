const path = require('path');
const expect = require('chai').expect;

const { findClosingParenthesis } = require(path.join(__dirname, '..', './findClosingParenthesis.js'));

describe('findClosingParenthesis()', function () {
  it('returns "-1" if second argument is not given', () => {
    expect(findClosingParenthesis('(hello)')).to.equal(-1);
  });
  it('returns "-1" if number is bigger than number of parentheses', () => {
    expect(findClosingParenthesis('hello', 1)).to.equal(-1);
  });
  it('works for single parenthesis', () => {
    expect(findClosingParenthesis('(hello)', 1)).to.equal(6);
  });
  it('works for a few parentheses', () => {
    expect(findClosingParenthesis('Hello, (world). (Something Else).', 2)).to.equal(31);
  });
  it('works for nested parentheses', () => {
    expect(findClosingParenthesis('Hello, (world, (foo) bar (something) else), foo (bar) cat', 3)).to.equal(35);
  });
});