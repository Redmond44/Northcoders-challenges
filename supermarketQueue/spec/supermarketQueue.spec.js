const expect = require('chai').expect;
const { queueTime } = require('../supermarketQueue');

describe('queueTime()', function () {
  it('returns the same element if one customer in the queue', () => {
    expect(queueTime([2], 5)).to.equal(2);
  });
  it('returns the sum of elements if one checkout till', () => {
    expect(queueTime([2, 2, 2], 1)).to.equal(6);
  });
  it('returns the total time required to process all the customers', () => {
    expect(queueTime([2, 2, 2], 2)).to.equal(4);
    expect(queueTime([2, 3, 10], 2)).to.equal(12);
    expect(queueTime([2, 3, 10, 10], 2)).to.equal(13);
    expect(queueTime([2, 3, 10, 10], 3)).to.equal(12);
  });
});