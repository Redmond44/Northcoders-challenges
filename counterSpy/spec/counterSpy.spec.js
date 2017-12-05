const expect = require('chai').expect;
const {counterSpy} = require('../counterSpy');

describe('counterSpy()', function () {
  it('is a function', function () {
    expect(counterSpy).to.be.a('function');
  });
});