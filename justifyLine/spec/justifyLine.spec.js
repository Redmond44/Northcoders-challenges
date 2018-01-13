const {expect} = require('chai');
const {justifyLine} = require('../justifyLine');

describe('justifyLine', function () {
  it('returns "String exceeds maximum line length." if the string contains more characters than the maximum line length" ', () => {
    expect(justifyLine('foo foo foo foo', 10)).to.equal('String exceeds maximum line length.');
  });
  it('returns unchanged string if maximum line length is equal string length', () => {
    expect(justifyLine('foo foo foo foo', 15)).to.equal('foo foo foo foo');
  });
  it('adds additional spaces between two words', () => {
    expect(justifyLine('foo foo', 10)).to.equal('foo    foo');
  });
  it('adds additional space after first word', () => {
    expect(justifyLine('foo foo foo foo', 16)).to.equal('foo  foo foo foo');
  });
  it('distributes spaces between each word', () => {
    expect(justifyLine('foo foo foo foo', 18)).to.equal('foo  foo  foo  foo');
  });
  it('inserts additional spaces in starting gaps', () => {
    expect(justifyLine('foo foo foo aaa', 20)).to.equal('foo   foo   foo  aaa');
  });
});