var pigLatin = function (str) {
  // in this case 'y' is considered to be a consonant
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const arrOfWords = str.split(' ');

  return arrOfWords.map((word) => {
    if (vowels.includes(word[0])) return word + 'way';
    else {
      const index = function (str) {
        for (let i = 0; i < str.length; i++) {
          if (vowels.includes(str.charAt(i))) {
            return i;
          }
        }
      };
      if (index(word) === undefined) return word + 'ay';
      return word.slice(index(word)) + word.slice(0, index(word)) + 'ay';
    }
  }).join(' ');  
};

if (typeof module !== 'undefined') {
  module.exports = { pigLatin };
}
