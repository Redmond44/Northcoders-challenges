const expect = require('chai').expect;
const {counterIntelligence} = require('../counterIntelligence');

describe('counterIntelligence()', function () {
  it('is a function', function () {
    expect(counterIntelligence).to.be.a('function');
  });
  it('returns "X" for single letter', function () {
    expect(counterIntelligence('Y')).to.equal('X');
  });
  it('returns unshifted message if only letters', function () {
    expect(counterIntelligence('BCD Y')).to.equal('ABC X');
    expect(counterIntelligence('NKRRU YCKKZNKGXZ D')).to.equal('HELLO SWEETHEART X');
  });
  it('returns unshifted message with unchanged punctuation', function () {
    expect(counterIntelligence('ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G')).to.equal('REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X');
  });
  it('works for lower cases', function () {
    expect(counterIntelligence('ngbk g toik jge :) d')).to.equal('HAVE A NICE DAY :) X');
  });
  it('works for mix of lower and upper cases', function () {
    expect(counterIntelligence('ngbk G TOIK jge :) d')).to.equal('HAVE A NICE DAY :) X');
  });
});