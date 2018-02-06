const needleInHaystack = function (haystack, str) {
  str = str.toLowerCase();
  let result = [];
  let path = [];

  const findNeedle = (haystack, str) => {
    for (let prop in haystack) {
      if (typeof haystack[prop] === 'string' && haystack[prop].toLowerCase().includes(str)) {
        let needlePath = path.slice();
        needlePath.push(prop);
        needlePath = needlePath.join('.');
        result.push(needlePath);
      }
      else if (typeof haystack[prop] === 'object') {
        path.push(prop);
        findNeedle(haystack[prop], str);
        path.pop();
      }
    }
  };

  findNeedle(haystack, str);

  return result.sort();
};

if (typeof module !== 'undefined') {
  module.exports = { needleInHaystack };
}