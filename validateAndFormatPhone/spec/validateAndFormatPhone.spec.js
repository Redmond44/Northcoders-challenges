var path = require('path');
var expect = require('chai').expect;

var {validateAndFormatPhone} = require(path.join(__dirname, '..', './validateAndFormatPhone.js'));

describe('validateAndFormatPhone()', function () {
  'use strict';

  it('exists', function () {
    expect(validateAndFormatPhone).to.be.a('function');

  });

  it('throws an error for an empty string', function () {
    var expectedErr = new Error('Invalid phone number');
    expect(validateAndFormatPhone('')).to.eql(expectedErr);
  });

  it('throws an error for a US phone Number', function () {
    var expectedErr = new Error('Invalid phone number');
    expect(validateAndFormatPhone('1-800-633-3469')).to.eql(expectedErr);
  });

});
