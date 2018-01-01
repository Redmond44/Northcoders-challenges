var path = require('path');
var expect = require('chai').expect;

var { vowelShift } = require(path.join(__dirname, '..', './vowelShift.js'));

describe('vowelShift()', function () {
  it('returns unchanged string if no second argument or equal 0', () => {
    expect(vowelShift('foo')).to.eql('foo');
    expect(vowelShift('foo', 0)).to.eql('foo');
  });
  it('shifts vowels 1 vowel position to the right if second argument equal 1', () => {
    expect(vowelShift('hello', 1)).to.eql('holle');
    expect(vowelShift('hello child', 1)).to.eql('hille chold');
  });
  it('shifts every vowel in the string n vowel positions', () => {
    expect(vowelShift('star nosed mole', 2)).to.eql('stor nesad mole');
    expect(vowelShift('funnily enough', 4)).to.eql('finnely onuugh');
  });
});