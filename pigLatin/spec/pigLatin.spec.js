var path = require('path');
var expect = require('chai').expect;

var {pigLatin} = require(path.join(__dirname, '..', './pigLatin.js'));

describe('pigLatin()', function () {
  it('returns vowel + "way" for a single vowel', function () {
    expect(pigLatin('a')).to.equal('away');
    expect(pigLatin('i')).to.equal('iway');
  });
  it('returns consonant + "ay" for a single consonant', function () {
    expect(pigLatin('n')).to.equal('nay');
    expect(pigLatin('b')).to.equal('bay');
  });
  it('returns word + "way" if word starts with a vowel', function () {
    expect(pigLatin('algorithm')).to.equal('algorithmway');
  });
  it('moves starting consonant to the end and append "ay" for words with one consonant at the beginning', function () {
    expect(pigLatin('northcoders')).to.equal('orthcodersnay');
  });
  it('moves all starting consonants to the end and append "ay" for words with few consonants at the beginning', function () {
    expect(pigLatin('sheffield')).to.equal('effieldshay');
  });
  it('works for sentences', function () {
    expect(pigLatin('keep on coding')).to.equal('eepkay onway odingcay');
  });
});
