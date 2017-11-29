var path = require('path');
var expect = require('chai').expect;

var { secondsToTimeString } = require(path.join(__dirname, '..', './secondsToTimeString.js'));

describe('secondsToTimeString()', function () {
  it('returns "1 second" for input equal 1', function () {
    expect(secondsToTimeString(1)).to.equal('1 second');
  });
  it('returns "x seconds" for input not equal 1', function () {
    expect(secondsToTimeString(0)).to.equal('0 seconds');
    expect(secondsToTimeString(5)).to.equal('5 seconds');
  });
  it('returns full minutes', function () {
    expect(secondsToTimeString(60)).to.equal('1 minute');
    expect(secondsToTimeString(120)).to.equal('2 minutes');
  });
  it('returns minutes and seconds', function () {
    expect(secondsToTimeString(121)).to.equal('2 minutes and 1 second');
  });
  it('returns hours, minutes and seconds', function () {
    expect(secondsToTimeString(3661)).to.equal('1 hour, 1 minute and 1 second');
    expect(secondsToTimeString(7261)).to.equal('2 hours, 1 minute and 1 second');
  });
  it('returns days, hours, minutes and seconds', function () {
    expect(secondsToTimeString(90061)).to.equal('1 day, 1 hour, 1 minute and 1 second');
    expect(secondsToTimeString(176461)).to.equal('2 days, 1 hour, 1 minute and 1 second');
  });
  it('returns years, days, hours, minutes and seconds', function () {
    expect(secondsToTimeString(31626061)).to.equal('1 year, 1 day, 1 hour, 1 minute and 1 second');
    expect(secondsToTimeString(127702942)).to.equal('4 years, 18 days, 1 hour, 2 minutes and 22 seconds');
  });
});
