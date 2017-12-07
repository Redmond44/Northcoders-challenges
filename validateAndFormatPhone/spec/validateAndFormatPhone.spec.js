var path = require('path');
var expect = require('chai').expect;

var { validateAndFormatPhone } = require(path.join(__dirname, '..', './validateAndFormatPhone.js'));

describe('validateAndFormatPhone()', function () {
  it('exists', function () {
    expect(validateAndFormatPhone).to.be.a('function');
  });
  it('throws an error for an empty string', function () {
    var expectedErr = new Error('Invalid phone number');
    expect(validateAndFormatPhone('')).to.eql(expectedErr);
  });
  it('throws an error for invalid string', function () {
    var expectedErr = new Error('Invalid phone number');
    expect(validateAndFormatPhone('Not a Number')).to.eql(expectedErr);
  });
  it('throws an error for a US phone Number', function () {
    var expectedErr = new Error('Invalid phone number');
    expect(validateAndFormatPhone('1-800-633-3469')).to.eql(expectedErr);
  });
  it('accepts only valid format: +4407, 004402, 07, 01, 02', function () {
    var expectedErr = new Error('Invalid phone number');
    expect(validateAndFormatPhone('+2082394891246')).to.eql(expectedErr);
    expect(validateAndFormatPhone('08559912983')).to.eql(expectedErr);
    expect(validateAndFormatPhone('01616603202')).not.to.eql(expectedErr);
  });
  it('returns correct format for 01, 02, and 07 formats', function () {
    expect(validateAndFormatPhone('01616603202')).to.eql('+441616603202');
    expect(validateAndFormatPhone('07540706000')).to.eql('+447540706000');
  });
  it('returns correct format for 0044 format', function () {
    expect(validateAndFormatPhone('00441616603202')).to.eql('+441616603202');
  });
  it('returns correct format for +44 format', function () {
    expect(validateAndFormatPhone('+447540706000')).to.eql('+447540706000');
  });
});
