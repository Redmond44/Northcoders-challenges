var everyContainsSomeTest = {
  every: function (list, predicate, context) {
    if (!predicate) predicate = function (num) { return num; };
    for (let prop in list) {
      const key = +prop || prop;
      if (!predicate(list[prop], key, list)) return false;
    }
    return true;
  },
  contains: function () {

  },
  some: function (list, predicate, context) {
    return false;
  }
};

if (typeof module !== 'undefined') {
  module.exports = { everyContainsSomeTest };
}
