var path = require('path');
var expect = require('chai').expect;

var { romanNumeralEncoder } = require(path.join(__dirname, '..', './romanNumeralEncoder.js'));

describe('romanNumeralEncoder()', function () {
  it('returns an empty string for invalid input', () => {
    expect(romanNumeralEncoder(true)).to.equal('');
    expect(romanNumeralEncoder('cat')).to.equal('');
  });
  it('returns a Roman Numeral string when passed a number', () => {
    expect(romanNumeralEncoder(1)).to.equal('I');
    expect(romanNumeralEncoder(2)).to.equal('II');
    expect(romanNumeralEncoder(10)).to.equal('X');
    expect(romanNumeralEncoder(17)).to.equal('XVII');
    expect(romanNumeralEncoder(60)).to.equal('LX');
    expect(romanNumeralEncoder(75)).to.equal('LXXV');
    expect(romanNumeralEncoder(91)).to.equal('XCI');
  });
});