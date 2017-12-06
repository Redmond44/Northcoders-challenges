const expect = require('chai').expect;
const {counterSpy} = require('../counterSpy');

describe('counterSpy()', function () {
  it('is a function', function () {
    expect(counterSpy).to.be.a('function');
  });
  it('returns an empty array for an empty array', function () {
    expect(counterSpy([])).to.eql([]);
  });
  it('returns the same array if names does not include "s", "p" or "y"', function () {
    expect(counterSpy(['Harriet'])).to.eql(['Harriet']);
  });
  it('returns an empty array if all names include "s", "p" or "y"', function () {
    expect(counterSpy(['Daryl'])).to.eql([]);
  });
  it('returns only names without "s", "p" or "y"', function () {
    expect(counterSpy(['Daryl','Harriet','James'])).to.eql(['Harriet']);
    expect(counterSpy(['Sam','Daryl','Chris','Harriet','Mauro'])).to.eql(['Harriet','Mauro']);
  });
  it('returns names in alphabetical order', function () {
    expect(counterSpy(['Mauro', 'Harriet'])).to.eql(['Harriet', 'Mauro']);
    expect(counterSpy(['Sam','Harriet','Adrian','Mauro'])).to.eql(['Adrian', 'Harriet', 'Mauro']);
  });
});