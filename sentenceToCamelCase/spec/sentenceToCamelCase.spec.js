var path = require('path');
var expect = require('chai').expect;

var { sentenceToCamelCase, sentenceFromCamelCase } = require(path.join(__dirname, '..', './sentenceToCamelCase.js'));

describe('sentenceToCamelCase()', function () {
  it('returns the same word for single word input', function () {
    expect(sentenceToCamelCase('this')).to.equal('this');
  });
  it('returns the UpperCamelCase word if second argument is true for single word input', function () {
    expect(sentenceToCamelCase('this', true)).to.equal('This');
    expect(sentenceToCamelCase('Book', true)).to.equal('Book');
  });
  it('returns the lowerCamelCase word if second argument is false for single word input', function () {
    expect(sentenceToCamelCase('this', false)).to.equal('this');
    expect(sentenceToCamelCase('Book', false)).to.equal('book');
  });
  it('returns only the first lowerCamelCase word if second argument is false for sentences', function () {
    expect(sentenceToCamelCase('this sentence', false)).to.equal('thisSentence');
    expect(sentenceToCamelCase('This sentence', false)).to.equal('thisSentence');
  });
  it('returns all UpperCamelCase words if second argument is true for sentences', function () {
    expect(sentenceToCamelCase('this sentence', true)).to.equal('ThisSentence');
    expect(sentenceToCamelCase('This sentence', true)).to.equal('ThisSentence');
    expect(sentenceToCamelCase('This Bigger strange Sentence', true)).to.equal('ThisBiggerStrangeSentence');
  });
});

describe('sentenceFromCamelCase()', function () {
  it('returns the same word for single word input as a sentence', function () {
    expect(sentenceFromCamelCase('this')).to.equal('This.');
  });
  it('returns few-word sentence if complex input', function () {
    expect(sentenceFromCamelCase('thisBiggerStrangeSentence')).to.equal('This bigger strange sentence.');
  });  
});
