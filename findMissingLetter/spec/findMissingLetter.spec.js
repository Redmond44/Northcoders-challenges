var path = require('path');
var expect = require('chai').expect;

var {findMissingLetter} = require(path.join(__dirname, '..', 'findMissingLetter.js'));

describe('findMissingLetter()', function () {
  'use strict';

  it('exists', function () {
    expect(findMissingLetter).to.be.a('function');
  });
});
