const expect = require('chai').expect;
const { validTriangles } = require('../validTriangles');

describe('validTriangles', function () {
    it('is a function', function () {
        expect(validTriangles).to.be.a('function');
    });
    it('returns 0 for an empty array', function () {
        expect(validTriangles([])).to.equal(0);
        expect(validTriangles([[]])).to.equal(0);
    });
    it('returns 0 if invalid side', function () {
        expect(validTriangles([[10, 2, 'hij']])).to.equal(0);
        expect(validTriangles([[10, true, 10]])).to.equal(0);
        expect(validTriangles([[true, true, true]])).to.equal(0);
    });
    it('returns 0 for single invalid triangle', function () {
        expect(validTriangles([[5, 10, 25]])).to.equal(0);
    });
    it('returns 1 for single valid triangle', function () {
        expect(validTriangles([[5, 4, 5]])).to.equal(1);
    });
    it('returns number of valid triangles', function () {
        expect(validTriangles([[5, 10, 25], [5, 4, 5]])).to.equal(1);
        expect(validTriangles([[542, 586, 419], [5, 4, 5]])).to.equal(2);
        expect(validTriangles([[5, 10, 25], [829, 272, 126]])).to.equal(0);
        expect(validTriangles([[5, 10, 25], [5, 4, 5], [235, 952, 840]])).to.equal(2);
    });
});