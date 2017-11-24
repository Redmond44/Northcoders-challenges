var path = require('path');
var expect = require('chai').expect;

var {passwordScore} = require(path.join(__dirname, '..', './passwordScore.js'));

describe('passwordScore()', function () {
  'use strict';

  it('returns a number', function () {
    expect(passwordScore('')).to.be.a('number');
    expect(passwordScore(1)).to.equal(0);
    expect(passwordScore(true)).to.equal(0);
  });
});
