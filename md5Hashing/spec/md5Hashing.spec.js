const request = require('supertest');
const { expect } = require('chai');
const { getDoorPassword } = require('../md5Hashing');

describe('getDoorPassword', function () {
  this.timeout(10000);
  it('returns response with result equal true for northcoders', function () {
    const data = getDoorPassword('northcoders');
    return request('https://nc-kata-solution.herokuapp.com')
      .post('/')
      .send(data)
      .then(res => {
        expect(res.body.result).to.equal(true);
      });
  });
  it('returns response with result equal true for bootcamp', function () {
    const data = getDoorPassword('bootcamp');
    return request('https://nc-kata-solution.herokuapp.com')
      .post('/')
      .send(data)
      .then(res => {
        expect(res.body.result).to.equal(true);
      });
  });
});