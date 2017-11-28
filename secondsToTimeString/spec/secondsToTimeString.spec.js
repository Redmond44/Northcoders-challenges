var path = require('path');
var expect = require('chai').expect;

var {secondsToTimeString} = require(path.join(__dirname, '..', './secondsToTimeString.js'));

describe('secondsToTimeString()', function () {
  'use strict';

  it('return a string', function () {
    expect(secondsToTimeString()).to.be.a('string');
  });

});
