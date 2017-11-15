var path = require('path');
var expect = require('chai').expect;

var {getTweetData} = require(path.join(__dirname, '..', './getTweetData.js'));

describe('getTweetData()', function () {
  'use strict';

  it('exists', function () {
    expect(getTweetData).to.be.a('function');

  });

  it('takes a single tweet argument', function () {
    expect(getTweetData.length).to.equal(1);
  });


});
