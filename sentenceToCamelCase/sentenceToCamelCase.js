var sentenceToCamelCase = function (str, isUpperCase) {
  return str.split(' ').map((word, index) => {
    if (!isUpperCase && index === 0) return word[0].toLowerCase() + word.slice(1);
    return word[0].toUpperCase() + word.slice(1);
  }).join('');
};

if (typeof module !== 'undefined') {
  module.exports = { sentenceToCamelCase };
}
