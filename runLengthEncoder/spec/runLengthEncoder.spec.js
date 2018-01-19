const { expect } = require('chai');
const { runLengthEncoder } = require('../runLengthEncoder');

describe('runLengthEncoder', function () {
  it('returns a colour preceded by 1 if single colour given', () => {
    expect(runLengthEncoder([255, 255, 255, 0])).to.eql([1, 255, 255, 255, 0]);
  });
  it('returns each colour preceded by 1 if no repeated colours', () => {
    const actual = [255, 255, 255, 0, 1, 1, 1, 45];
    const expected = [1, 255, 255, 255, 0, 1, 1, 1, 1, 45];
    expect(runLengthEncoder(actual)).to.eql(expected);
  });
  it('sums a colour', () => {
    const actual = [255, 255, 255, 0, 255, 255, 255, 0, 255, 255, 255, 0];
    const expected = [3, 255, 255, 255, 0];
    expect(runLengthEncoder(actual)).to.eql(expected);
  });
  it('does not sum colour if separeted by different colour', () => {
    const actual = [255, 255, 255, 0, 1, 1, 1, 44, 255, 255, 255, 0];
    const expected = [1, 255, 255, 255, 0, 1, 1, 1, 1, 44, 1, 255, 255, 255, 0];
    expect(runLengthEncoder(actual)).to.eql(expected);
  });
  it('works for complex arrays', () => {
    const actual = [29, 93, 242, 255, 29, 93, 242, 255, 29, 93, 242, 255, 245, 12, 51, 77, 0, 0, 0, 255, 0, 0, 0, 255];
    const expected = [3, 29, 93, 242, 255, 1, 245, 12, 51, 77, 2, 0, 0, 0, 255];
    expect(runLengthEncoder(actual)).to.eql(expected);
  });
});