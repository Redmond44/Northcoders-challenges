var path = require('path');
var expect = require('chai').expect;

var {morseDecode} = require(path.join(__dirname, '..', './morseCode.js'));

describe('morseDecode()', function () {
  it('exists', function () {
    expect(morseDecode).to.be.a('function');
  });
  it('works for single letter', function () {
    expect(morseDecode('....')).to.equal('H');
  });
  it('works for single word', function () {
    expect(morseDecode('.... ..')).to.equal('HI');
    expect(morseDecode('.... . .-.. .-.. ---')).to.equal('HELLO');
    expect(morseDecode('-. --- .-. - .... -.-. --- -.. . .-. ...')).to.equal('NORTHCODERS'); 
  });
  it('works for sentence', function () {
    const morse = '--. --- --- -..    -- --- .-. -. .. -. --.    -. --- .-. - .... -.-. --- -.. . .-. ...';
    expect(morseDecode(morse)).to.equal('GOOD MORNING NORTHCODERS');
  });
  it('converts single letter to morse code', function () {
    expect(morseDecode('H', true)).to.equal('....');
  });
  it('converts single word to morse code', function () {
    expect(morseDecode('HI', true)).to.equal('.... ..');
    expect(morseDecode('HELLO', true)).to.equal('.... . .-.. .-.. ---');
    expect(morseDecode('NORTHCODERS', true)).to.equal('-. --- .-. - .... -.-. --- -.. . .-. ...'); 
  });
  it('converts sentence to morse code', function () {
    const morse = '--. --- --- -..    -- --- .-. -. .. -. --.    -. --- .-. - .... -.-. --- -.. . .-. ...';
    expect(morseDecode('GOOD MORNING NORTHCODERS', true)).to.equal(morse);
  });
});
