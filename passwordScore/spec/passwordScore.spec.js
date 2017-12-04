var path = require('path');
var expect = require('chai').expect;

var {passwordScore} = require(path.join(__dirname, '..', './passwordScore.js'));

describe('passwordScore()', function () {
  it('returns 0 for invalid input', function () {
    expect(passwordScore(1)).to.equal(0);
    expect(passwordScore(true)).to.equal(0);5
    expect(passwordScore([1, 2, 3])).to.equal(0);
  });
  it('returns 1 if password is less than four characters', function () {
    expect(passwordScore('bob')).to.equal(1);
    expect(passwordScore('bobo')).not.to.equal(1);
  });
  it('returns 2 if password is less than nine characters', function () {
    expect(passwordScore('bobbybob')).to.equal(2);
    expect(passwordScore('bobb')).to.equal(2);
    expect(passwordScore('bobbybobo')).not.to.equal(2);
  });
  it('returns 3 if password has more than eight characters and all are letters', function () {
    expect(passwordScore('bobbobbo')).not.to.equal(3);
    expect(passwordScore('bobbobbob')).to.equal(3);
    expect(passwordScore('bobBObbob')).to.equal(3);
    expect(passwordScore('bobb£bbob')).not.to.equal(3);
    expect(passwordScore('bobbbb78ob')).not.to.equal(3);
  });
  it('returns 4 if password has more than eight characters and includes a number', function () {
    expect(passwordScore('bobbobbob1')).to.equal(4);
    expect(passwordScore('bbobbob1')).not.to.equal(4);
  });
  it('returns 5 if password has more than eight characters and includes a number and special character', function () {
    expect(passwordScore('bobbob1#2$')).to.equal(5);
    expect(passwordScore('bob1#2$')).not.to.equal(5);
  });
  it('returns 6 if password has more than twelve characters and includes a number', function () {
    expect(passwordScore('bobbobbobbob123')).to.equal(6);
    expect(passwordScore('bobbobbob123')).not.to.equal(6);
  });
  it('returns 7 if password has more than twelve characters and includes a number and special character', function () {
    expect(passwordScore('bobbobbob1!2@3#')).to.equal(7);
    expect(passwordScore('bbobob1!2@3#')).not.to.equal(7);
  });
  // it('includes special character (without a number)', function () {
  //   expect(passwordScore('bobbobbob!')).to.equal(?);
  // });  
});
