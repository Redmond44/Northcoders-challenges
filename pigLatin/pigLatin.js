var pigLatin = function (str) {
  // in this case 'y' is considered to be a consonant
  const vowels = /[aeiou]/i;
  const arrOfWords = str.split(' ');

  return arrOfWords.map((word) => {
    if (word[0].match(vowels)) return word + 'way';
    else {
      const firstVowelIndex = word.search(vowels);
      if (firstVowelIndex === undefined) return word + 'ay';
      return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay';
    }
  }).join(' ');
};

if (typeof module !== 'undefined') {
  module.exports = { pigLatin };
}
