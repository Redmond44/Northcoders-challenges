const { expect } = require('chai');
const { parseHexInt } = require('../parseHexInt');

describe('parseHexInt', function () {
  it('returns decimal number for single char hexadecimal number', () => {
    expect(parseHexInt('9')).to.equal(9);
    expect(parseHexInt('A')).to.equal(10);
    expect(parseHexInt('F')).to.equal(15);
  });
  it('it is case insensitive when it comes to the hexadecimal numbers', () => {
    expect(parseHexInt('a')).to.equal(10);
    expect(parseHexInt('f')).to.equal(15);
  });
  it('returns the hexadecimal number expressed in the decimal numerical sytem', () => {
    expect(parseHexInt('ff')).to.equal(255);
    expect(parseHexInt('17f')).to.equal(383);
    expect(parseHexInt('d4e89')).to.equal(872073);
  });
});