const {expect} = require('chai');
const {wrongWayCow} = require('../wrongWayCow');

describe('wrongWayCow', function () {
  it('returns an empty array if all cows are facing the right way', () => {
    expect(wrongWayCow('cowcowcowcow')).to.eql([]);
    expect(wrongWayCow('wocwocwoc')).to.eql([]);
  });
  it('returns the coordinates of the cow facing the wrong way for single line of cows', () => {
    expect(wrongWayCow('cowwoccowcow')).to.eql([0, 1]);
    expect(wrongWayCow('wocwocwoccow')).to.eql([0, 3]);
  });
  it('returns the coordinates of the cow facing the wrong way for few lines of cows', () => {
    expect(wrongWayCow('cowwoccowcow\ncowcowcowcow')).to.eql([0, 1]);
    expect(wrongWayCow('cowcowcowcow\ncowcowcowcow')).to.eql([]);
    expect(wrongWayCow('wocwocwocwoc\nwocwocwoccow\nwocwocwocwoc')).to.eql([1, 3]);
  });
  it('returns the coordinates of the cow facing the wrong way if empty pasture', () => {
    expect(wrongWayCow('cowcowcow...\n...woccowcow\n............')).to.eql([1, 1]);
    expect(wrongWayCow('cowcowcowcow\n......cowcow\n............\n...cow...woc')).to.eql([3, 3]);
    expect(wrongWayCow('wocwoc...woc...\n...woc...cow...\n...wocwocwocwoc')).to.eql([1, 3]);
    expect(wrongWayCow('cowcowcow...\n...cowcowcow\n............')).to.eql([]);
  });
});