var everyContainsSomeTest = {
  every: function (list, predicate, context) {
    if (!predicate) predicate = function (num) { return num; };
    for (let prop in list) {
      if (!predicate(list[prop])) return false;
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
