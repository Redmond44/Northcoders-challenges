var path = require('path');
var expect = require('chai').expect;

var {pigLatin} = require(path.join(__dirname, '..', './pigLatin.js'));

describe('pigLatin()', function () {
  'use strict';
  it('return vowel + "way" for single vowel', function () {
    expect(pigLatin('a')).to.equal('away');
    expect(pigLatin('i')).to.equal('iway');
  });
  it('return consonant + "ay" for single consonant', function () {
    expect(pigLatin('n')).to.equal('nay');
    expect(pigLatin('b')).to.equal('bay');
  });
  it('return str + "way" for string starts with a vowel', function () {
    expect(pigLatin('algorithm')).to.equal('algorithmway');
  });
  it('move starting consonant to the end and append "ay" for strings with one consonant at the beginning', function () {
    expect(pigLatin('northcoders')).to.equal('orthcodersnay');
  });
  it('move all starting consonants to the end and append "ay" for strings with few consonants at the beginning', function () {
    expect(pigLatin('sheffield')).to.equal('effieldshay');
  });
});
