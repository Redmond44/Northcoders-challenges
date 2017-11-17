var expect = require('chai').expect;
var {foldString} = require('../foldStrings');

describe('foldString', function () {
  it('returns an empty string if passed an invalid input', function() {
    expect(foldString(2)).to.equal('');
    expect(foldString(true)).to.equal('');
    expect(foldString(['k', 'b'])).to.equal('');
  });
  it('returns the same word for one-, two-, and three-letter word', function() {
    expect(foldString('a')).to.equal('a');
    expect(foldString('ab')).to.equal('ab');
    expect(foldString('abc')).to.equal('abc');
  });
  it('move all letters if the word is even length', function() {
    expect(foldString('code')).to.equal('oced');
    expect(foldString('javascript')).to.equal('savajtpirc');
  });
  it('leave the middle letter of the word where it is if the word is odd length', function() {
    expect(foldString('Northcoders')).to.equal('htroNcsredo');
  });
  it('turns each word inside out in the string', function() {
    expect(foldString('Northcoders javascript code')).to.equal('htroNcsredo savajtpirc oced');
  });
});
