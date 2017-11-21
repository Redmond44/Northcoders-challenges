const expect = require('chai').expect;
const {herdTheBabies} = require('../herdTheBabies');

describe('herdTheBabies()', function () {
  it('returns the same letter for a single letter "parent"', function () {
    expect(herdTheBabies('B')).to.equal('B');
  });
  it('returns "parent" letter before its "baby" for one pair', function () {
    expect(herdTheBabies('aA')).to.equal('Aa');
  });
  it('returns "parent" letter before its "baby" for several pairs', function () {
    expect(herdTheBabies('aAB')).to.equal('AaB');
    expect(herdTheBabies('aAaaabbbbB')).to.equal('AaaaaBbbbb');
  });
  it('returns string that is sorted alphabetically', function () {
    expect(herdTheBabies('aBA')).to.equal('AaB');
    expect(herdTheBabies('bbaBccAC')).to.equal('AaBbbCcc');
  });
});