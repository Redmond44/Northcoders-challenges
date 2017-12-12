var path = require('path');
var expect = require('chai').expect;

var { palindrome } = require(path.join(__dirname, '..', './palindrome.js'));

describe('palindrome()', function () {
  it('returns true for an empty string', () => {
    expect(palindrome('')).to.equal(true);
  });
  it('returns true for single letter', () => {
    expect(palindrome('a')).to.equal(true);
    expect(palindrome('B')).to.equal(true);
  });
  it('works for single word', () => {
    expect(palindrome('cat')).to.equal(false);
    expect(palindrome('cahgc')).to.equal(false);
    expect(palindrome('cahac')).to.equal(true);
  });
  it('works for sentence', () => {
    expect(palindrome('acrobats stab orca')).to.equal(true);
    expect(palindrome('are we not drawn onward to new era')).to.equal(true);    
    expect(palindrome('acrobats stab')).to.equal(false);
  });
  it('insensitive to capitals', () => {
    expect(palindrome('Acrobats stab orca')).to.equal(true);
    expect(palindrome('Are we not drawn onward to new era')).to.equal(true);    
    expect(palindrome('Acrobats stab')).to.equal(false);
  });
});
