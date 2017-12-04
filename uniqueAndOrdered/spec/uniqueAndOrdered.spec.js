var expect = require('chai').expect;
var {uniqueAndOrdered} = require('../uniqueAndOrdered');

describe('uniqueAndOrdered', function () {
  it('is a function', function () {
    expect(uniqueAndOrdered).to.be.a('function');
  });
});
