const path = require('path');
const expect = require('chai').expect;

const { crackCode } = require(path.join(__dirname, '..', 'crackCode.js'));

describe('crackCode()', function () {
  it('returns false if code in brackets is not in the alphabetical order', () => {
    expect(crackCode('a-b-c-d-123(acbd)')).to.equal(false);
  });
  it('returns false if letters in bracket-code are not the most common', () => {
    expect(crackCode('fff-gg-xx-ss-y(fgsy)')).to.equal(false);
  });
  it('returns false if letters in bracket-code are not alphabetically first', () => {
    expect(crackCode('a-b-c-d-e-f-g-h-i-577(efgh)')).to.equal(false);
    expect(crackCode('bbb-yy-a-cc-zzz-ee(bcez)')).to.equal(true);
  });
  it('works correctly for random occurrence of letters', () => {
    expect(crackCode('ddd-aaa-z-y-x-123(adxy)')).to.equal(true);
  });
  it('returns true for valid keys ', () => {
    expect(crackCode('a-b-c-d-e-f-g-h-i-577(abcd)')).to.equal(true);
    expect(crackCode('fff-gg-xx-ss-y(fgsx)')).to.equal(true);
  });
});