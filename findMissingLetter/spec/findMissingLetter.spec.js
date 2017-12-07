var path = require('path');
var expect = require('chai').expect;

var {findMissingLetter} = require(path.join(__dirname, '..', 'findMissingLetter.js'));

describe('findMissingLetter()', function () {
  it('exists', function () {
    expect(findMissingLetter).to.be.a('function');
  });
  it('returns an empty string if no letter missing', function () {
    expect(findMissingLetter(['A', 'B'])).to.equal('');
    expect(findMissingLetter(['A', 'B', 'C', 'D', 'E'])).to.equal('');
    expect(findMissingLetter(['C', 'D', 'E'])).to.equal('');
  });
  it('returns missing letter', function () {
    expect(findMissingLetter(['A', 'B', 'C', 'E'])).to.equal('D');
    expect(findMissingLetter(['C', 'E', 'F'])).to.equal('D');    
  });
  it('works for small letters', function () {
    expect(findMissingLetter(['e', 'f', 'g', 'i'])).to.equal('h');
    expect(findMissingLetter(['e', 'f', 'g', 'h', 'i'])).to.equal('');    
  });
});
