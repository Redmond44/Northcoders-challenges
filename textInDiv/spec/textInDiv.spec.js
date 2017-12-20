var path = require('path');
var expect = require('chai').expect;

var { textInDiv } = require(path.join(__dirname, '..', './textInDiv.js'));

describe('textInDiv()', function () {
  it('returns "INVALID INPUT" if second argument is less than 15', () => {
    expect(textInDiv('cat', 5)).to.equal('INVALID INPUT');
  });
  it('returns text if the length is smaller than second argument', () => {
    expect(textInDiv('Northcoders', 15)).to.equal('Northcoders');
    expect(textInDiv('Northcoders Coding Bootcamp', 30)).to.equal('Northcoders Coding Bootcamp');
  });
  it('formats the text to fit the width', () => {
    const str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis.';
    expect(textInDiv('Northcoders Coding Bootcamp', 15)).to.equal('Northcoders\nCoding Bootcamp');
    expect(textInDiv('Northcoders Coding Bootcamp', 20)).to.equal('Northcoders Coding\nBootcamp');
    expect(textInDiv(str, 50)).to.equal('Lorem ipsum dolor sit amet, consectetur adipiscing\nelit. Aliquam nec consectetur risus. Cras vel urna\na tellus dapibus consequat. Duis bibendum\ntincidunt viverra. Phasellus dictum efficitur sem\nquis porttitor. Mauris luctus auctor diam id\nultrices. Praesent laoreet in enim ut placerat.\nPraesent a facilisis turpis.');
    expect(textInDiv(str, 30)).to.equal('Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.\nAliquam nec consectetur risus.\nCras vel urna a tellus dapibus\nconsequat. Duis bibendum\ntincidunt viverra. Phasellus\ndictum efficitur sem quis\nporttitor. Mauris luctus\nauctor diam id ultrices.\nPraesent laoreet in enim ut\nplacerat. Praesent a facilisis\nturpis.');
  });
}); 
