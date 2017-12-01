var path = require('path');
var expect = require('chai').expect;

var {morseDecode} = require(path.join(__dirname, '..', './morseCode.js'));

describe('morseDecode()', function () {
  'use strict';

  it('exists', function () {
    expect(morseDecode).to.be.a('function');

  });
});
