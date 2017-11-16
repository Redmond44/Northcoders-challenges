var path = require('path');
var expect = require('chai').expect;

var {getTweetData} = require(path.join(__dirname, '..', './getTweetData.js'));

describe('getTweetData()', function () {
  'use strict';

  it('exists', function () {
    expect(getTweetData).to.be.a('function');

  });

  it('returns length of the tweet', function () {
    expect(getTweetData('My awesome tweet').length).to.equal(16);
    expect(getTweetData('My awesome tweet to @northcoders').length).to.equal(32);
    expect(getTweetData('My awesome tweet about #coding').length).to.equal(30);
    expect(getTweetData('My awesome tweet about #coding to @northcoders').length).to.equal(46);
    expect(getTweetData('I am #coding with @northcoders I love #coding and @northcoders').length).to.equal(62);
  });

  it('returns amount of hash tags', function () {    
    expect(getTweetData('My awesome tweet').tagCount).to.equal(0);
    expect(getTweetData('My awesome tweet to @northcoders').tagCount).to.equal(0);
    expect(getTweetData('My awesome tweet about #coding').tagCount).to.equal(1);
    expect(getTweetData('My awesome tweet about #coding to @northcoders').tagCount).to.equal(1);
  });

  // empty string
  // single letter, word
  // string with #
  // string with @ 


});
