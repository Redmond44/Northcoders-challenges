// Please do not change the name of this function
var pigLatin = function (str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(str[0])) return str + 'way';

  else {
    const index = function(str) {
      for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str.charAt(i))) {
          return i;
        }
      }
    };
    if (index(str) === undefined) return str + 'ay';
    return str.slice(index(str)) + str.slice(0, index(str)) + 'ay';
  }
};

if (typeof module !== 'undefined') {
  module.exports = { pigLatin };
}
