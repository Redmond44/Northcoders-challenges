var everyContainsSomeTest = {
  every: function (list, predicate, context) {
    for (let prop in list) {
      if (!list[prop]) return false;
    }
    return true;
  },
  contains: function () {

  },
  some: function () {

  }
};

if (typeof module !== 'undefined') {
  module.exports = { everyContainsSomeTest };
}
