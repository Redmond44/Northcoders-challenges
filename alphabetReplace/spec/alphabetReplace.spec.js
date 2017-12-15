const { expect } = require('chai');
const {alphabetReplace} = require('../alphabetReplace');

describe('alphabetReplae', () => {
  it('returns corresponding index for single letter', () => {
    expect(alphabetReplace('a')).to.equal('1');
  });
  it('returns corresponding indexes for single word', () => {
    expect(alphabetReplace('code')).to.equal('3 15 4 5');
  });
  it('not case sensitive', () => {
    expect(alphabetReplace('Northcoders')).to.equal('14 15 18 20 8 3 15 4 5 18 19');
  });
  it('returns corresponding indexes for sentence', () => {
    expect(alphabetReplace('expert programming')).to.equal('5 24 16 5 18 20 16 18 15 7 18 1 13 13 9 14 7');
  });
});
