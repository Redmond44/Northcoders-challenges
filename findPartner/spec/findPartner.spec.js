const path = require('path');
const expect = require('chai').expect;

const { findPartner } = require(path.join(__dirname, '..', 'findPartner.js'));

describe('findPartner()', function () {
  const students = [
    ['Steve', 'Dave', 'Mike', 'Lisa', 'Stacey'],
    ['Emma', 'Martin', 'Susan', 'Rich', 'Luke']
  ];
  it('returns an empty array if missing arguments', () => {
    expect(findPartner()).to.eql([]);
    expect(findPartner(students)).to.eql([]);
  });
  it('returns an empty array if an array of directions is empty', () => {
    expect(findPartner(students, [])).to.eql([]);
  });
  it('returns an empty array if incorrect direction', () => {
    expect(findPartner(students, ['cat'])).to.eql([]);
  });
  it('returns correct items in the same array horizontally', () => {
    expect(findPartner(students, ['right'])).to.eql(['Dave']);
    expect(findPartner(students, ['right', 'right', 'right'])).to.eql(['Dave', 'Mike', 'Lisa']);
  });
  it('returns the rightmost item in the same array if you are at the leftmost item and go left', () => {
    expect(findPartner(students, ['left'])).to.eql(['Stacey']);
  });
  it('returns the leftmost item in the same array if you are at the rightmost item and go right', () => {
    expect(findPartner(students, ['right', 'right', 'right', 'right', 'right'])).to.eql(['Dave', 'Mike', 'Lisa', 'Stacey', 'Steve']);
  });
  it('returns correct items vertically', () => {
    expect(findPartner(students, ['down'])).to.eql(['Emma']);
  });
  it('if you at the top of the array and try to go up, you will stay where you are', () => {
    expect(findPartner(students, ['up'])).to.eql([]);
    expect(findPartner(students, ['right', 'up', 'up'])).to.eql(['Dave']);
  });
  it('if you at the end of the array and try to go down, you will stay where you are', () => {
    expect(findPartner(students, ['down', 'down'])).to.eql(['Emma']);
    expect(findPartner(students, ['down', 'down', 'left'])).to.eql(['Emma', 'Luke']);
  });
});