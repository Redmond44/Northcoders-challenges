// Please do not change the name of this function
var pigLatin = function (str) {
  const vowels = ['a', 'e', 'i', 'o', 'u' ];

  if (vowels.includes(str[0])) return str + 'way';
  else {
    str = str.slice(1) + str.slice(0, 1);
    if (vowels.includes(str[0])) return str + 'ay';
  }

// indexOf
// znajdz index pierwszej samogloski
// split(' ') for sentence

};

if (typeof module !== 'undefined') {
  module.exports = {pigLatin};
}
