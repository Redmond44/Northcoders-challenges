var path = require('path');
var expect = require('chai').expect;

var { tillAddition } = require(path.join(__dirname, '..', './tillAddition.js'));

describe('tillAddition()', function () {
  it('works for one piece', function () {
    expect(tillAddition({ '2p': 1 })).to.equal('£0.02');
  });
  it('works for few pieces', function () {
    expect(tillAddition({ '1p': 1, '2p': 1, '5p': 1, '10p': 1, '20p': 1 })).to.equal('£0.38');
  });
  it('works for one coin or note', function () {
    expect(tillAddition({ '£10': 1 })).to.equal('£10.00');
  });
  it('works for few coins and notes', function () {
    expect(tillAddition({ '£1': 1, '£5': 1, '£10': 1, '£20': 1, '£50': 1 })).to.equal('£86.00');
  });
  it('works for mix of pieces, coins and notes', function () {
    expect(tillAddition({'5p': 1,'10p': 1,'20p': 1,'50p': 1,'£1': 1})).to.equal('£1.85');
  });
  it('works for mix of amounts', function () {
    expect(tillAddition({'5p': 5,'10p': 18,'20p': 2,'50p': 34,'£1': 100})).to.equal('£119.45');
  });
});
