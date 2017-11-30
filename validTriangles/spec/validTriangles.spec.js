const expect = require('chai').expect;
const {validTriangles} = require('../validTriangles');

describe('validTriangles', function () {
    it('is a function', function () {
        expect(validTriangles).to.be.a('function');
    });

});