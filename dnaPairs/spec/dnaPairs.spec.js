var path = require('path');
var expect = require('chai').expect;

var { dnaPairs } = require(path.join(__dirname, '..', './dnaPairs.js'));

describe('dnaPairs()', function () {
  'use strict';
  it('returns an empty array for an empty string', function () {
    expect(dnaPairs('')).to.eql([]);
  });
  it('returns nested array for one-letter string', function () {
    expect(dnaPairs('A')).to.eql([['A', 'T']]);
  });
  it('matches each base with its pair, returning a nested array', function () {
    expect(dnaPairs('AG')).to.eql([['A', 'T'], ['G', 'C']]);
    expect(dnaPairs('ATAG')).to.eql([['A', 'T'], ['T', 'A'], ['A', 'T'], ['G', 'C']]);
  });
  it('works for lower case', function () {
    expect(dnaPairs('ag')).to.eql([['A', 'T'], ['G', 'C']]);
    expect(dnaPairs('atag')).to.eql([['A', 'T'], ['T', 'A'], ['A', 'T'], ['G', 'C']]);
  });
  it('returns undefined if invalid letter', function () {
    expect(dnaPairs('h')).to.eql([undefined]);
    expect(dnaPairs('azg')).to.eql([['A', 'T'], undefined, ['G', 'C']]);
  });
});
