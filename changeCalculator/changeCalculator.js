var changeCalculator = function (amountOfChange) {
  const reference = [200, 100, 50, 20, 10, 5, 2, 1];

  return reference.reduce((acc, denomination) => {
    const value = Math.floor(amountOfChange / denomination);
    amountOfChange = amountOfChange % denomination;
    if (denomination > 50) denomination = `£${denomination / 100}`;
    if (value) acc[denomination] = value;
    return acc;
  }, {});
};

if (typeof module !== 'undefined') {
  module.exports = { changeCalculator };
}
