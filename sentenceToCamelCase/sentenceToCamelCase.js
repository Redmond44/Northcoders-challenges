var sentenceToCamelCase = function (str, isUpperCase) {
  // Regular expression
  function replacer (str) {
    return `${str[0]}${str[2].toUpperCase()}`;
  }
  const newStr = str.toLowerCase().replace(/[a-z] [a-z]/ig, replacer);
  if (isUpperCase) return `${newStr[0].toUpperCase()}${newStr.slice(1)}`;
  return newStr;

  // return str.split(' ').map((word, index) => {
  //   if (!isUpperCase && index === 0) return word.toLowerCase();
  //   return word[0].toUpperCase() + word.slice(1).toLowerCase();
  // }).join('');
};

var sentenceFromCamelCase = function (str) {
  function replacer (str) {
    return `${str[0]} ${str[1].toLowerCase()}`;
  }
  const newStr = str.replace(/[a-z][A-Z]/g, replacer);
  return `${newStr[0].toUpperCase()}${newStr.slice(1)}.`;
};

if (typeof module !== 'undefined') {
  module.exports = { sentenceToCamelCase, sentenceFromCamelCase };
}
