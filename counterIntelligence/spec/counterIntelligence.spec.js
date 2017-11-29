const expect = require('chai').expect;
const {counterIntelligence} = require('../counterIntelligence');

describe('counterIntelligence()', function () {
  it('is a function', function () {
    expect(counterIntelligence).to.be.a('function');
  });
});