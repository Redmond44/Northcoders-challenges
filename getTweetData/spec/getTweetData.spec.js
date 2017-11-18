var path = require('path');
var expect = require('chai').expect;

var {getTweetData} = require(path.join(__dirname, '..', './getTweetData.js'));

describe('getTweetData()', function () {
  it('exists', function () {
    expect(getTweetData).to.be.a('function');
  });
  it('returns falsely properties for an empty string', function () {
    expect(getTweetData('')).to.eql({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0 });
  });  
  it('returns length of the tweet', function () {
    expect(getTweetData('My awesome tweet').length).to.equal(16);
    expect(getTweetData('My awesome tweet to @northcoders').length).to.equal(32);
  });
  it('returns amount of hash tags', function () {    
    expect(getTweetData('My awesome tweet').tagCount).to.equal(0);
    expect(getTweetData('My awesome tweet about #coding').tagCount).to.equal(1);
  });
  it('returns an array of hash tags', function () {    
    expect(getTweetData('My awesome tweet').tags).to.eql([]);
    expect(getTweetData('My awesome tweet about #coding').tags).to.eql(['#coding']);
  });
  it('returns amount of mentions', function () {    
    expect(getTweetData('My awesome tweet to @northcoders').mentionCount).to.equal(1);
    expect(getTweetData('My awesome tweet about #coding to @northcoders').mentionCount).to.equal(1);
  });
  it('returns an array of mentions', function () {    
    expect(getTweetData('My awesome tweet to @northcoders').mentions).to.eql(['@northcoders']);
    expect(getTweetData('My awesome tweet about #coding to @northcoders').mentions).to.eql(['@northcoders']);
  });
  it('returns only unique hash tags and handles mentioned', function () {    
    expect(getTweetData('I am #coding with @northcoders I love #coding and @northcoders')).to.eql({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 });
  });
});
