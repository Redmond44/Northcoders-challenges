const path = require('path');
const expect = require('chai').expect;

const { simplifyDirections } = require(path.join(__dirname, '..', './simplifyDirections.js'));

describe('simplifyDirections()', function () {
  it('returns the same array if no directions to simplyfy', () => {
    expect(simplifyDirections(['NORTH', 'EAST'])).to.eql(['NORTH', 'EAST']);
  });
  it('returns an empty array if the directions cancel one another out', () => {
    expect(simplifyDirections(['NORTH', 'EAST'])).to.eql(['NORTH', 'EAST']);
  });
  it('returns an array with simplified directions', () => {
    expect(simplifyDirections(['NORTH', 'SOUTH', 'WEST'])).to.eql(['WEST']);
    expect(simplifyDirections(['NORTH', 'WEST', 'SOUTH', 'WEST', 'EAST'])).to.eql(['WEST']);
    expect(simplifyDirections(['NORTH', 'EAST', 'SOUTH', 'WEST', 'NORTH', 'NORTH'])).to.eql(['NORTH', 'NORTH']);
  });
});